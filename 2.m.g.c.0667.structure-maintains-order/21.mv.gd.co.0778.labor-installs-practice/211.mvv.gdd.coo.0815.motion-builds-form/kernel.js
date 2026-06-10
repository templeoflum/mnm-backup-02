// ===== TS-PORTABLE KERNEL (pure math, no DOM) — node-verified against verify_toys.py =====
const TAU=Math.PI*2, PHI=(1+Math.sqrt(5))/2;
const SCHED=[[0,1],[1,2],[2,3],[0,3],[0,2],[1,3]];
function rateFor(k,ratio){ return Math.pow(1/ratio,k); }

// formula bank (matches TS formulaPoint + staged buildRaw, ortho-w projection)
function stagedPt(ph, D, L, kHole){
  const M=new Float64Array([1,0,0,0,0, 0,1,0,0,0, 0,0,1,0,0, 0,0,0,1,0, 0,0,0,0,1]);
  const pt=()=>[M[0]*D+M[4],M[5]*D+M[9],M[10]*D+M[14],M[15]*D+M[19]];
  for(let k=0;k<L;k++){
    const cyc=Math.floor(k/2), idx=k%2;
    if(idx===0&&cyc>=1){ const d=kHole*Math.pow(kHole+1,cyc-1)*D; M[4]+=d; } // T·M adds to col-4
    const [i,j]=SCHED[k%6]; const th=ph[k], c=Math.cos(th), s=Math.sin(th);
    for(let col=0;col<5;col++){ const ri=M[i*5+col], rj=M[j*5+col]; M[i*5+col]=c*ri-s*rj; M[j*5+col]=s*ri+c*rj; }
  }
  const p=pt(); return [p[0],p[1],p[2]]; // ortho-w
}
function formulaPoint(name, ph, D, L, kHole){
  if(name==='staged') return stagedPt(ph,D,L,kHole==null?2:kHole);
  if(name==='lissajous') return [D*Math.sin(ph[0]), L>=2?D*Math.sin(ph[1]):0, L>=3?D*Math.sin(ph[2]):0];
  if(name==='torus'){ const Rmaj=D*0.9,rmin=D*0.42,a0=ph[0],a1=L>=2?ph[1]:ph[0];
    let x=(Rmaj+rmin*Math.cos(a1))*Math.cos(a0),y=(Rmaj+rmin*Math.cos(a1))*Math.sin(a0),z=rmin*Math.sin(a1);
    if(L>=3){const a=ph[2];const nx=x*Math.cos(a)-z*Math.sin(a),nz=x*Math.sin(a)+z*Math.cos(a);x=nx;z=nz;} return [x,y,z]; }
  if(name==='epicyclic'){ let x=0,y=0,z=0,rad=D*0.7,n=Math.min(L+1,4);
    for(let i=0;i<n;i++){x+=rad*Math.cos(ph[i]);y+=rad*Math.sin(ph[i]);if(i%2===1)z+=rad*0.5*Math.sin(ph[i]);rad*=0.5;} return [x,y,z]; }
  if(name==='freed'){ let p=[D,0,0]; const FP=[[0,1],[1,2],[0,2]]; const dstep=(kHole==null?2:kHole)*0.25;
    for(let L2=0;L2<L;L2++){ if(L2>=1){for(let a=0;a<3;a++)p[a]+=dstep*D*Math.cos(ph[(a+10)%40]);}
      for(let q=0;q<3;q++){const[i,j]=FP[q];const c=Math.cos(ph[q]),s=Math.sin(ph[q]);const pi=p[i],pj=p[j];p[i]=c*pi-s*pj;p[j]=s*pi+c*pj;} } return p; }
  return [0,0,0];
}

// ---- SIGNAL LENS ----
// sample z(t)=x+iy (or chosen axes) at the cascade rates
function sampleSeries(name, ratio, D, L, dt, N, kHole, axes){
  const re=new Float64Array(N), im=new Float64Array(N);
  const r=[]; for(let k=0;k<L;k++) r.push(rateFor(k,ratio));
  const ph=new Float64Array(40);
  const ai=axes?axes[0]:0, bi=axes?axes[1]:1;
  for(let n=0;n<N;n++){ const t=n*dt; for(let k=0;k<L;k++) ph[k]=t*r[k];
    const p=formulaPoint(name,ph,D,L,kHole); re[n]=p[ai]; im[n]=p[bi]; }
  return {re,im};
}
// iterative radix-2 FFT (N power of 2), in-place on re/im
function fft(re, im){
  const n=re.length;
  for(let i=1,j=0;i<n;i++){ let bit=n>>1; for(;j&bit;bit>>=1) j^=bit; j^=bit;
    if(i<j){ [re[i],re[j]]=[re[j],re[i]]; [im[i],im[j]]=[im[j],im[i]]; } }
  for(let len=2;len<=n;len<<=1){ const ang=-TAU/len, wr=Math.cos(ang), wi=Math.sin(ang);
    for(let i=0;i<n;i+=len){ let cr=1,ci=0;
      for(let k=0;k<len/2;k++){ const ur=re[i+k], ui=im[i+k];
        const vr=re[i+k+len/2]*cr-im[i+k+len/2]*ci, vi=re[i+k+len/2]*ci+im[i+k+len/2]*cr;
        re[i+k]=ur+vr; im[i+k]=ui+vi; re[i+k+len/2]=ur-vr; im[i+k+len/2]=ui-vi;
        const ncr=cr*wr-ci*wi; ci=cr*wi+ci*wr; cr=ncr; } } }
}
// windowed power spectrum (Hann + coherent-gain). returns {omega[], amp[]}
function spectrum(re, im, dt){
  const N=re.length, R=Float64Array.from(re), I=Float64Array.from(im);
  let mr=0,mi=0; for(let i=0;i<N;i++){mr+=R[i];mi+=I[i];} mr/=N;mi/=N;
  let cg=0; for(let i=0;i<N;i++){ const w=0.5-0.5*Math.cos(TAU*i/(N-1)); cg+=w; } cg/=N;
  for(let i=0;i<N;i++){ const w=0.5-0.5*Math.cos(TAU*i/(N-1)); R[i]=(R[i]-mr)*w; I[i]=(I[i]-mi)*w; }
  fft(R,I);
  const omega=new Float64Array(N), amp=new Float64Array(N);
  for(let k=0;k<N;k++){ const f=(k<N/2?k:k-N)/(N*dt); omega[k]=TAU*f; amp[k]=Math.hypot(R[k],I[k])/(N*cg); }
  return {omega,amp};
}
// EXACT line amplitudes: least-squares projection of z onto given frequency basis (leakage-immune)
function latticeProject(re, im, dt, freqs){
  const N=re.length, M=freqs.length;
  // normal equations (BᴴB) a = Bᴴ z, B[n,m]=e^{i w_m t_n}
  const Ar=[],Ai=[]; for(let a=0;a<M;a++){Ar.push(new Float64Array(M));Ai.push(new Float64Array(M));}
  const br=new Float64Array(M), bi=new Float64Array(M);
  for(let m=0;m<M;m++){ let sbr=0,sbi=0;
    for(let n=0;n<N;n++){ const t=n*dt, ph=-freqs[m]*t, cr=Math.cos(ph), ci=Math.sin(ph);
      sbr+=cr*re[n]-ci*im[n]; sbi+=cr*im[n]+ci*re[n]; }
    br[m]=sbr; bi[m]=sbi;
    for(let l=0;l<M;l++){ let sr=0,si=0; const dw=freqs[m]-freqs[l];
      for(let n=0;n<N;n++){ const ph=-dw*n*dt; sr+=Math.cos(ph); si+=Math.sin(ph); } Ar[m][l]=sr; Ai[m][l]=si; } }
  // solve complex MxM via Gaussian elimination
  const a=[]; for(let i=0;i<M;i++){a.push([]); for(let j=0;j<M;j++) a[i].push([Ar[i][j],Ai[i][j]]); a[i].push([br[i],bi[i]]);}
  const cmul=(x,y)=>[x[0]*y[0]-x[1]*y[1], x[0]*y[1]+x[1]*y[0]];
  const cdiv=(x,y)=>{const d=y[0]*y[0]+y[1]*y[1];return [(x[0]*y[0]+x[1]*y[1])/d,(x[1]*y[0]-x[0]*y[1])/d];};
  for(let i=0;i<M;i++){ let piv=a[i][i];
    for(let j=i;j<=M;j++) a[i][j]=cdiv(a[i][j],piv);
    for(let r=0;r<M;r++){ if(r===i)continue; const f=a[r][i];
      for(let j=i;j<=M;j++){ const m2=cmul(f,a[i][j]); a[r][j]=[a[r][j][0]-m2[0],a[r][j][1]-m2[1]]; } } }
  return freqs.map((f,m)=>Math.hypot(a[m][M][0],a[m][M][1]));
}

// ---- SYMMETRY PROBE ----
const WEYL_PRIMES=[2,3,5,7,11,13,17,19,23,29,31,37];
function weylCloud(name, D, L, kHole, N){
  const pts=[]; const ph=new Float64Array(40);
  const al=[]; for(let k=0;k<40;k++) al.push(TAU*Math.sqrt(WEYL_PRIMES[k%WEYL_PRIMES.length]));
  for(let s=0;s<N;s++){ for(let k=0;k<L;k++) ph[k]=(s*al[k])%TAU; pts.push(formulaPoint(name,ph,D,L,kHole)); }
  return pts;
}
function eigSym3(A){ // cyclic Jacobi; returns {values:[desc], vectors:[v0,v1,v2]}
  const a=[A[0].slice(),A[1].slice(),A[2].slice()]; const V=[[1,0,0],[0,1,0],[0,0,1]];
  for(let sw=0;sw<24;sw++){ let p=0,q=1,mx=Math.abs(a[0][1]);
    if(Math.abs(a[0][2])>mx){mx=Math.abs(a[0][2]);p=0;q=2;} if(Math.abs(a[1][2])>mx){mx=Math.abs(a[1][2]);p=1;q=2;}
    if(mx<1e-12)break; const app=a[p][p],aqq=a[q][q],apq=a[p][q]; const phi=0.5*Math.atan2(2*apq,aqq-app);
    const c=Math.cos(phi),s=Math.sin(phi);
    for(let k=0;k<3;k++){const kp=a[k][p],kq=a[k][q];a[k][p]=c*kp-s*kq;a[k][q]=s*kp+c*kq;}
    for(let k=0;k<3;k++){const pk=a[p][k],qk=a[q][k];a[p][k]=c*pk-s*qk;a[q][k]=s*pk+c*qk;}
    for(let k=0;k<3;k++){const vp=V[k][p],vq=V[k][q];V[k][p]=c*vp-s*vq;V[k][q]=s*vp+c*vq;} }
  let vals=[a[0][0],a[1][1],a[2][2]]; const idx=[0,1,2].sort((i,j)=>vals[j]-vals[i]);
  return {values:idx.map(i=>vals[i]), vectors:idx.map(i=>[V[0][i],V[1][i],V[2][i]])};
}
function pca(pts){ const N=pts.length; let mx=0,my=0,mz=0; for(const p of pts){mx+=p[0];my+=p[1];mz+=p[2];} mx/=N;my/=N;mz/=N;
  let c00=0,c11=0,c22=0,c01=0,c02=0,c12=0;
  for(const p of pts){const dx=p[0]-mx,dy=p[1]-my,dz=p[2]-mz;c00+=dx*dx;c11+=dy*dy;c22+=dz*dz;c01+=dx*dy;c02+=dx*dz;c12+=dy*dz;}
  c00/=N;c11/=N;c22/=N;c01/=N;c02/=N;c12/=N;
  return {com:[mx,my,mz], ...eigSym3([[c00,c01,c02],[c01,c11,c12],[c02,c12,c22]])};
}
function centerCloud(pts){ const N=pts.length; let mx=0,my=0,mz=0; for(const p of pts){mx+=p[0];my+=p[1];mz+=p[2];} mx/=N;my/=N;mz/=N;
  return pts.map(p=>[p[0]-mx,p[1]-my,p[2]-mz]); }
function meanNN(A,B){ let s=0; for(const a of A){ let m=Infinity; for(const b of B){ const dx=a[0]-b[0],dy=a[1]-b[1],dz=a[2]-b[2],d=dx*dx+dy*dy+dz*dz; if(d<m)m=d; } s+=Math.sqrt(m);} return s/A.length; }
function baselineNN(P){ let s=0; for(let i=0;i<P.length;i++){ let m=Infinity; for(let j=0;j<P.length;j++){ if(i===j)continue; const dx=P[i][0]-P[j][0],dy=P[i][1]-P[j][1],dz=P[i][2]-P[j][2],d=dx*dx+dy*dy+dz*dz; if(d<m)m=d; } s+=Math.sqrt(m);} return s/P.length; }
function reflect(P,n){ const nn=Math.hypot(n[0],n[1],n[2]); const u=[n[0]/nn,n[1]/nn,n[2]/nn];
  return P.map(p=>{ const d=p[0]*u[0]+p[1]*u[1]+p[2]*u[2]; return [p[0]-2*d*u[0],p[1]-2*d*u[1],p[2]-2*d*u[2]]; }); }
function rotateAx(P,axis,ang){ const nn=Math.hypot(...axis); const a=[axis[0]/nn,axis[1]/nn,axis[2]/nn];
  const c=Math.cos(ang),s=Math.sin(ang),C=1-c;
  return P.map(p=>{ const [x,y,z]=p;
    return [ (c+a[0]*a[0]*C)*x+(a[0]*a[1]*C-a[2]*s)*y+(a[0]*a[2]*C+a[1]*s)*z,
             (a[1]*a[0]*C+a[2]*s)*x+(c+a[1]*a[1]*C)*y+(a[1]*a[2]*C-a[0]*s)*z,
             (a[2]*a[0]*C-a[1]*s)*x+(a[2]*a[1]*C+a[0]*s)*y+(c+a[2]*a[2]*C)*z ]; }); }
function invertP(P){ return P.map(p=>[-p[0],-p[1],-p[2]]); }
function symScore(P, transformed, base){ return meanNN(transformed,P)/base; }

if(typeof module!=='undefined') module.exports={rateFor,formulaPoint,sampleSeries,spectrum,latticeProject,weylCloud,pca,centerCloud,baselineNN,reflect,rotateAx,invertP,symScore,TAU,PHI};
