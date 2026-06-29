const fs=require('fs'); const src=fs.readFileSync('spliced_block.js','utf8');
// mock TS globals the block depends on
const TAU=Math.PI*2, PHI=(1+Math.sqrt(5))/2;
let ph=new Array(40).fill(0), rung=2, kHole=2, currentFormula='torus', rateRatioId='irr4';
const RATIOS={irr4:{base:Math.PI,label:'π'}};
function rateFor(k){ return Math.pow(1/Math.PI,k); }
function buildRaw(){ const D=80,Rmaj=D*0.9,rmin=D*0.42,a0=ph[0],a1=ph[1];
  return [(Rmaj+rmin*Math.cos(a1))*Math.cos(a0),(Rmaj+rmin*Math.cos(a1))*Math.sin(a0),rmin*Math.sin(a1)]; }
// sphere cloud for symmetry
function rng(s){return()=>{s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff;};}
const R=rng(7); const cloud=[]; for(let i=0;i<600;i++){let v=[R()*2-1,R()*2-1,R()*2-1];const m=Math.hypot(...v)||1;cloud.push([v[0]/m*50,v[1]/m*50,v[2]/m*50]);}
const meas={cloud, com:[0,0,0], pcaVec:[[1,0,0],[0,1,0],[0,0,1]], pcaVal:[2500,2500,2500]};
const document={getElementById:(id)=>{ if(id==='sigAxesSel')return{value:'0,1'}; if(id==='specCanvas')return null; return {checked:true}; }};
const window={devicePixelRatio:1};

const harness=new Function('TAU','PHI','ph','rung','kHole','currentFormula','rateRatioId','RATIOS','rateFor','buildRaw','meas','document','window',
  src + '\n;return {recomputeSpectrum, recomputeSym, getSpec:()=>_specCache, getSym:()=>_symCache};');
const L=harness(TAU,PHI,ph,rung,kHole,currentFormula,rateRatioId,RATIOS,rateFor,buildRaw,meas,document,window);

L.recomputeSpectrum();
const sc=L.getSpec(); const lines=sc.lines.slice().sort((a,b)=>b.exact-a.exact);
console.log('SIGNAL — torus lines (exact amps via in-bench projection):');
let ok1=true; const want=[72,16.8,16.8];
lines.slice(0,3).forEach((u,i)=>{ const m=Math.abs(u.exact-want[i])<0.05; if(!m)ok1=false;
  console.log('  ω='+u.w.toFixed(4)+'  |a|='+u.exact.toFixed(3)+'  '+(m?'OK':'**OFF**')); });
console.log('  => '+(ok1?'PASS (72 / 16.8 / 16.8)':'FAIL'));

L.recomputeSym();
const sy=L.getSym();
console.log('\nSYMMETRY — sphere cloud (all ops should be ~1):');
let ok2=true; sy.ops.forEach(o=>{ if(o.score>1.8){ok2=false;} });
console.log('  '+sy.ops.map(o=>o.name+'='+o.score.toFixed(2)).join('  '));
console.log('  => '+(ok2?'PASS (all ~1, symmetric)':'FAIL'));
console.log('\nLENSBLOCK INTEGRATION: '+(ok1&&ok2?'PASS':'FAIL'));
