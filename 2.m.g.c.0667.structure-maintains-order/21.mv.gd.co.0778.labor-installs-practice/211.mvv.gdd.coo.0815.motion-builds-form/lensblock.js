// ══════════════════════════════════════════════════════════════════════════════════════════════════
// SIGNAL LENS + SYMMETRY PROBE (folded-in lenses) — math node-verified in test_kernel.js.
// signal lens: reads the form as a time-signal z(t)=axis₁+i·axis₂ sampled through buildRaw at the
//   cascade rates; windowed-FFT picture + integer lattice Σnₖωₖ + EXACT line amps by projection.
//   Commensurability is NOT judged here (deferred to the continued-fraction readout — finite spectra
//   cannot separate near-rational from rational).
// symmetry probe: measures the SAME Weyl cloud TS uses for PCA (meas.cloud) against candidate group
//   ops (mirror ⟂ each PCA plane, point inversion, rotational order C2..C6 about each PCA axis); score
//   = chamfer residual ÷ the cloud's own nearest-neighbour baseline (self-calibrating to sampling noise).
// recompute is gated to parameter changes (both are too heavy for every frame); the spectrum canvas is
// redrawn cheaply each frame from cache.
// ══════════════════════════════════════════════════════════════════════════════════════════════════
let _specCache=null, _specSig='', _symCache=null, _symSig='';
function _lensAxes(){ const e=document.getElementById('sigAxesSel'); return e?e.value:'0,1'; }
function _lensParamSig(){ return currentFormula+'|'+rung+'|'+kHole+'|'+rateRatioId+'|'+_lensAxes(); }

// ---- signal lens kernel (math verbatim from the verified standalone) ----
function _sampleSignal(dt,N,ai,bi){
  const re=new Float64Array(N), im=new Float64Array(N); const save=ph.slice();
  for(let n=0;n<N;n++){ const t=n*dt; for(let k=0;k<rung;k++) ph[k]=t*rateFor(k); const p=buildRaw(); re[n]=p[ai]; im[n]=p[bi]; }
  for(let k=0;k<ph.length;k++) ph[k]=save[k];
  return {re,im};
}
function _fft(re,im){ const n=re.length;
  for(let i=1,j=0;i<n;i++){ let bit=n>>1; for(;j&bit;bit>>=1) j^=bit; j^=bit;
    if(i<j){[re[i],re[j]]=[re[j],re[i]];[im[i],im[j]]=[im[j],im[i]];} }
  for(let len=2;len<=n;len<<=1){ const ang=-TAU/len,wr=Math.cos(ang),wi=Math.sin(ang);
    for(let i=0;i<n;i+=len){ let cr=1,ci=0;
      for(let k=0;k<len/2;k++){ const ur=re[i+k],ui=im[i+k];
        const vr=re[i+k+len/2]*cr-im[i+k+len/2]*ci, vi=re[i+k+len/2]*ci+im[i+k+len/2]*cr;
        re[i+k]=ur+vr; im[i+k]=ui+vi; re[i+k+len/2]=ur-vr; im[i+k+len/2]=ui-vi;
        const ncr=cr*wr-ci*wi; ci=cr*wi+ci*wr; cr=ncr; } } } }
function _spectrum(re,im,dt){ const N=re.length,R=Float64Array.from(re),I=Float64Array.from(im);
  let mr=0,mi=0; for(let i=0;i<N;i++){mr+=R[i];mi+=I[i];} mr/=N;mi/=N;
  let cg=0; for(let i=0;i<N;i++){const w=0.5-0.5*Math.cos(TAU*i/(N-1));cg+=w;} cg/=N;
  for(let i=0;i<N;i++){const w=0.5-0.5*Math.cos(TAU*i/(N-1));R[i]=(R[i]-mr)*w;I[i]=(I[i]-mi)*w;}
  _fft(R,I); const omega=new Float64Array(N),amp=new Float64Array(N);
  for(let k=0;k<N;k++){const f=(k<N/2?k:k-N)/(N*dt);omega[k]=TAU*f;amp[k]=Math.hypot(R[k],I[k])/(N*cg);} return {omega,amp}; }
function _latticeProject(re,im,dt,freqs){ const N=re.length,M=freqs.length;
  const Ar=[],Ai=[]; for(let a=0;a<M;a++){Ar.push(new Float64Array(M));Ai.push(new Float64Array(M));}
  const br=new Float64Array(M),bi=new Float64Array(M);
  for(let m=0;m<M;m++){ let sbr=0,sbi=0;
    for(let n=0;n<N;n++){const t=n*dt,p=-freqs[m]*t,cr=Math.cos(p),ci=Math.sin(p);sbr+=cr*re[n]-ci*im[n];sbi+=cr*im[n]+ci*re[n];}
    br[m]=sbr;bi[m]=sbi;
    for(let l=0;l<M;l++){let sr=0,si=0;const dw=freqs[m]-freqs[l];for(let n=0;n<N;n++){const p=-dw*n*dt;sr+=Math.cos(p);si+=Math.sin(p);}Ar[m][l]=sr;Ai[m][l]=si;} }
  const a=[]; for(let i=0;i<M;i++){a.push([]);for(let j=0;j<M;j++)a[i].push([Ar[i][j],Ai[i][j]]);a[i].push([br[i],bi[i]]);}
  const cmul=(x,y)=>[x[0]*y[0]-x[1]*y[1],x[0]*y[1]+x[1]*y[0]];
  const cdiv=(x,y)=>{const d=y[0]*y[0]+y[1]*y[1];return [(x[0]*y[0]+x[1]*y[1])/d,(x[1]*y[0]-x[0]*y[1])/d];};
  for(let i=0;i<M;i++){let piv=a[i][i];for(let j=i;j<=M;j++)a[i][j]=cdiv(a[i][j],piv);
    for(let r=0;r<M;r++){if(r===i)continue;const f=a[r][i];for(let j=i;j<=M;j++){const m2=cmul(f,a[i][j]);a[r][j]=[a[r][j][0]-m2[0],a[r][j][1]-m2[1]];}}}
  return freqs.map((f,m)=>Math.hypot(a[m][M][0],a[m][M][1])); }
// integer lattice — CAPPED to the first 4 base rates (higher cascade rates are ~0 frequency); bounded ≤7^4.
function _latticeFreqs(rates,wmax){ const nUse=Math.min(rates.length,4), nmax=3, m=new Map();
  (function rec(i,w,combo){ if(i===nUse){ if(w>1e-6&&w<wmax){ const key=w.toFixed(4); if(!m.has(key)) m.set(key,{w,combo:combo.slice()}); } return; }
    for(let n=-nmax;n<=nmax;n++) rec(i+1,w+n*rates[i],combo.concat(n)); })(0,0,[]);
  return [...m.values()].sort((a,b)=>a.w-b.w); }
function _comboLabel(combo){ const parts=[]; combo.forEach((n,k)=>{ if(n!==0) parts.push((n===1?'':(n===-1?'−':(n>0?'+':'')+n))+'ω'+k); });
  return parts.join(' ').replace(/^\+/,'')||'0'; }
function recomputeSpectrum(){
  const dt=0.4, N=4096; const ax=_lensAxes().split(',').map(Number);
  const {re,im}=_sampleSignal(dt,N,ax[0],ax[1]);
  const sp=_spectrum(re,im,dt);
  const rates=[]; for(let k=0;k<rung;k++) rates.push(rateFor(k));
  const wmax=6.5, lat=_latticeFreqs(rates,wmax);
  let amax=0; for(let k=0;k<N;k++){ if(sp.omega[k]>0&&sp.omega[k]<wmax) amax=Math.max(amax,sp.amp[k]); } amax=amax||1;
  const peaks=[]; for(let k=2;k<N-2;k++){ const w=sp.omega[k]; if(w<=0||w>=wmax) continue;
    if(sp.amp[k]>sp.amp[k-1]&&sp.amp[k]>=sp.amp[k+1]&&sp.amp[k]>0.04*amax) peaks.push({w,a:sp.amp[k]}); }
  peaks.sort((a,b)=>b.a-a.a);
  const snapped=peaks.slice(0,7).map(p=>{ let best=null,bd=1e9; for(const L of lat){const d=Math.abs(L.w-p.w); if(d<bd){bd=d;best=L;}} return {w:best?best.w:p.w, combo:best?best.combo:null, fft:p.a}; });
  const uniq=[]; for(const s of snapped){ if(!uniq.some(u=>Math.abs(u.w-s.w)<1e-3)) uniq.push(s); }
  const exact=uniq.length?_latticeProject(re,im,dt,uniq.map(u=>u.w)):[];
  uniq.forEach((u,i)=>u.exact=exact[i]);
  _specCache={sp,lat,wmax,amax,lines:uniq,rates};
}
function drawSpectrum(){
  const c=document.getElementById('specCanvas'); if(!c||!_specCache) return;
  const dpr=Math.min(2,window.devicePixelRatio||1), cw=c.clientWidth||300;
  if(c.width!==Math.round(cw*dpr)){ c.width=cw*dpr; c.height=150*dpr; }
  const g=c.getContext('2d'); g.setTransform(dpr,0,0,dpr,0,0); const W=cw,H=150,pad=8;
  g.fillStyle='#0A0E12'; g.fillRect(0,0,W,H);
  const {sp,lat,wmax,amax,lines}=_specCache;
  const logY=document.getElementById('sigLogChk')&&document.getElementById('sigLogChk').checked;
  const X=w=>pad+(w/wmax)*(W-2*pad);
  const Y=a=>{ if(logY){const la=Math.log10(Math.max(a,1e-4))+4,lm=Math.log10(amax)+4;return H-pad-(la/lm)*(H-2*pad);} return H-pad-(a/amax)*(H-2*pad); };
  if(document.getElementById('sigLatChk')&&document.getElementById('sigLatChk').checked){
    g.strokeStyle='rgba(204,121,167,0.28)'; g.lineWidth=1; for(const L of lat){const px=X(L.w);g.beginPath();g.moveTo(px,pad);g.lineTo(px,H-pad);g.stroke();} }
  g.strokeStyle='rgba(86,180,233,0.9)'; g.lineWidth=1.2; g.beginPath(); let st=false; const N=sp.omega.length;
  for(let k=0;k<N;k++){const w=sp.omega[k]; if(w<=0||w>=wmax)continue; const px=X(w),py=Y(sp.amp[k]); if(!st){g.moveTo(px,H-pad);g.lineTo(px,py);st=true;}else g.lineTo(px,py);} g.lineTo(X(wmax),H-pad); g.stroke();
  g.strokeStyle='rgba(106,118,134,0.3)'; g.beginPath(); g.moveTo(pad,H-pad); g.lineTo(W-pad,H-pad); g.stroke();
  g.fillStyle='#6a7686'; g.font='9px ui-monospace,monospace'; for(let w=0;w<=6;w++){g.fillText(w.toFixed(0),X(w)-3,H-1);}
  lines.forEach(u=>{const px=X(u.w),py=Y(u.exact);g.fillStyle='rgba(230,159,0,0.95)';g.beginPath();g.arc(px,py,3,0,7);g.fill();});
}
function signalLinesHTML(){
  if(!_specCache) return '';
  const rs=_specCache.rates.slice(0,4).map((r,k)=>'ω'+k+'='+r.toFixed(3)).join(' ');
  const rows=_specCache.lines.slice().sort((a,b)=>b.exact-a.exact).slice(0,5).map(u=>(u.combo?_comboLabel(u.combo):'off-lat')+' ω'+u.w.toFixed(3)+' |a|'+u.exact.toFixed(1)).join(' · ');
  return '<span class="m" style="color:#56B4E9"><b>signal spectrum</b> ['+rs+'] → '+(rows||'—')+' <i>(amps exact by projection; FFT heights leak)</i></span>';
}

// ---- symmetry probe kernel ----
function _meanNN(A,B){ let s=0; for(const a of A){ let m=Infinity; for(const b of B){ const dx=a[0]-b[0],dy=a[1]-b[1],dz=a[2]-b[2],d=dx*dx+dy*dy+dz*dz; if(d<m)m=d; } s+=Math.sqrt(m);} return s/A.length; }
function _baselineNN(P){ let s=0; for(let i=0;i<P.length;i++){ let m=Infinity; for(let j=0;j<P.length;j++){ if(i===j)continue; const dx=P[i][0]-P[j][0],dy=P[i][1]-P[j][1],dz=P[i][2]-P[j][2],d=dx*dx+dy*dy+dz*dz; if(d<m)m=d; } s+=Math.sqrt(m);} return s/P.length; }
function _reflect(P,n){ const nn=Math.hypot(n[0],n[1],n[2])||1; const u=[n[0]/nn,n[1]/nn,n[2]/nn];
  return P.map(p=>{ const d=p[0]*u[0]+p[1]*u[1]+p[2]*u[2]; return [p[0]-2*d*u[0],p[1]-2*d*u[1],p[2]-2*d*u[2]]; }); }
function _rotateAx(P,axis,ang){ const nn=Math.hypot(axis[0],axis[1],axis[2])||1; const a=[axis[0]/nn,axis[1]/nn,axis[2]/nn];
  const c=Math.cos(ang),s=Math.sin(ang),C=1-c;
  return P.map(p=>{ const x=p[0],y=p[1],z=p[2];
    return [ (c+a[0]*a[0]*C)*x+(a[0]*a[1]*C-a[2]*s)*y+(a[0]*a[2]*C+a[1]*s)*z,
             (a[1]*a[0]*C+a[2]*s)*x+(c+a[1]*a[1]*C)*y+(a[1]*a[2]*C-a[0]*s)*z,
             (a[2]*a[0]*C-a[1]*s)*x+(a[2]*a[1]*C+a[0]*s)*y+(c+a[2]*a[2]*C)*z ]; }); }
function _invertP(P){ return P.map(p=>[-p[0],-p[1],-p[2]]); }
function recomputeSym(){
  if(!meas.cloud||meas.cloud.length<10){ _symCache=null; return; }
  const src=meas.cloud, step=Math.max(1,Math.floor(src.length/600)), com=meas.com;
  const P=[]; for(let i=0;i<src.length;i+=step) P.push([src[i][0]-com[0],src[i][1]-com[1],src[i][2]-com[2]]);
  const base=_baselineNN(P)||1, V=meas.pcaVec, ops=[];
  ['P1','P2','P3'].forEach((lab,i)=>ops.push({name:'mirror ⟂'+lab, score:_meanNN(_reflect(P,V[i]),P)/base}));
  ops.push({name:'inversion', score:_meanNN(_invertP(P),P)/base});
  ['P1','P2','P3'].forEach((lab,i)=>{ let best=1,sc=null,c2=null;
    for(let n=2;n<=6;n++){ const s=_meanNN(_rotateAx(P,V[i],TAU/n),P)/base; if(n===2)c2=s; if(s<1.6){best=n;sc=s;} }
    ops.push({name:'rot ∥'+lab, score:best>1?sc:c2, order:best, isRot:true}); });
  _symCache={ops,base};
}
function symHTML(){
  if(!_symCache) return '';
  const cls=s=>s<1.6?'#5fe0a8':(s<2.4?'#E69F00':'#ff6a6a');
  const cells=_symCache.ops.map(o=>{ let lab=o.name; if(o.isRot){lab+=o.order>1?(' C'+(o.order>=6?'∞':o.order)):' none';}
    return '<span style="color:'+cls(o.score)+'">'+lab+' '+o.score.toFixed(2)+'</span>'; }).join(' · ');
  const hasMirror=_symCache.ops.slice(0,3).some(o=>o.score<1.6)||_symCache.ops[3].score<1.6;
  return '<span class="m tensor" style="color:#9d8cff"><b>symmetry</b> '+cells+' <i>(÷noise floor; ≈1 holds)</i></span>'+
    '<span class="m" style="color:'+(hasMirror?'#78ffc8':'#E69F00')+'"><b>mirror?</b> '+(hasMirror?'yes — this form\'s ½ is a fixed point of a reflection/inversion':'no reflection survives — its ½ is the ruler midpoint, not a mirror')+'</span>';
}

// ---- per-frame tick: recompute only on parameter change; redraw spectrum each frame when on ----
function lensTick(){
  const sigOn=document.getElementById('signalChk')&&document.getElementById('signalChk').checked;
  const symOn=document.getElementById('symChk')&&document.getElementById('symChk').checked;
  const wrap=document.getElementById('specWrap'); if(wrap) wrap.style.display=sigOn?'block':'none';
  const psig=_lensParamSig();
  if(sigOn){ if(psig!==_specSig){ recomputeSpectrum(); _specSig=psig; } drawSpectrum(); }
  if(symOn){ if(psig!==_symSig){ recomputeSym(); _symSig=psig; } }
}
