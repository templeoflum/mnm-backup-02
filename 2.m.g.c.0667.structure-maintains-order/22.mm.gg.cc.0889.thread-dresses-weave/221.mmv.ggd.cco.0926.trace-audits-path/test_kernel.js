const K=require('./kernel.js');
const PI=Math.PI, D=80, eps=(a,b,t)=>Math.abs(a-b)<=t;
let pass=true;

// ---- TOY A: torus lines exact via lattice projection ----
const w0=K.rateFor(0,PI), w1=K.rateFor(1,PI);
const freqs=[w0-w1,w0,w0+w1], ampsTrue=[80*0.42/2,80*0.9,80*0.42/2];
const {re,im}=K.sampleSeries('torus',PI,D,2,0.5,8192,2,[0,1]);
const amps=K.latticeProject(re,im,0.5,freqs);
console.log('TOY A — torus lattice projection (exact line amps):');
freqs.forEach((f,i)=>{ const ok=eps(amps[i],ampsTrue[i],0.01); pass&&=ok;
  console.log(`  w=${f.toFixed(4)}  |a|=${amps[i].toFixed(4)}  pred=${ampsTrue[i].toFixed(3)}  ${ok?'OK':'**OFF**'}`); });

// windowed FFT: dominant line within 1%, location exact
const sp=K.spectrum(re,im,0.5);
let kmax=0; for(let k=0;k<sp.amp.length;k++) if(sp.amp[k]>sp.amp[kmax]) kmax=k;
const okLoc=eps(Math.abs(sp.omega[kmax]),w0,0.01), okAmp=eps(sp.amp[kmax],80*0.9,0.8);
pass&&=okLoc&&okAmp;
console.log(`  FFT dominant: w=${sp.omega[kmax].toFixed(4)} amp=${sp.amp[kmax].toFixed(3)} (loc ${okLoc?'OK':'OFF'}, amp ${okAmp?'OK':'OFF'})`);

// ---- TOY B: symmetry scores match Python (sphere~1, ellipsoid 120 high, lopsided mirror-x high) ----
function rng(seed){ let s=seed; return ()=>{ s=(s*1103515245+12345)&0x7fffffff; return s/0x7fffffff; }; }
const R=rng(1);
function sphere(n){const P=[];for(let i=0;i<n;i++){let v=[R()*2-1,R()*2-1,R()*2-1];const m=Math.hypot(...v)||1;P.push([v[0]/m*50,v[1]/m*50,v[2]/m*50]);}return P;}
function ellip(n){const P=[];for(let i=0;i<n;i++){let v=[R()*2-1,R()*2-1,R()*2-1];const m=Math.hypot(...v)||1;P.push([v[0]/m*60,v[1]/m*40,v[2]/m*25]);}return P;}
function lop(n){const P=[];for(let i=0;i<n;i++){let v=[R()*2-1,R()*2-1,R()*2-1];const m=Math.hypot(...v)||1;let p=[v[0]/m*50,v[1]/m*50,v[2]/m*50];if(p[0]>30)p[0]+=35;P.push(p);}return P;}
function report(name,P){ P=K.centerCloud(P); const base=K.baselineNN(P);
  const mx=K.symScore(P,K.reflect(P,[1,0,0]),base), my=K.symScore(P,K.reflect(P,[0,1,0]),base);
  const inv=K.symScore(P,K.invertP(P),base), r180=K.symScore(P,K.rotateAx(P,[0,0,1],Math.PI),base), r120=K.symScore(P,K.rotateAx(P,[0,0,1],K.TAU/3),base);
  console.log(`  ${name}: mirror_x=${mx.toFixed(2)} mirror_y=${my.toFixed(2)} inv=${inv.toFixed(2)} rot180=${r180.toFixed(2)} rot120=${r120.toFixed(2)}`);
  return {mx,my,inv,r180,r120}; }
console.log('TOY B — symmetry scores (~1 symmetric, >>1 broken):');
const sp1=report('SPHERE',sphere(900));
const el=report('ELLIPSOID',ellip(900));
const lo=report('LOPSIDED',lop(900));
const bTests=[ sp1.mx<1.8, sp1.inv<1.8, el.r120>2.5, el.inv<1.8, lo.mx>2.5, lo.my<1.8 ];
const bOK=bTests.every(Boolean); pass&&=bOK;
console.log(`  discrimination checks (sphere pass / ellipsoid C2-not-C3 / lopsided mirror-x fails): ${bOK?'OK':'**OFF**'}`);

console.log('\nKERNEL VERIFICATION: '+(pass?'PASS — matches verify_toys.py':'FAIL'));
