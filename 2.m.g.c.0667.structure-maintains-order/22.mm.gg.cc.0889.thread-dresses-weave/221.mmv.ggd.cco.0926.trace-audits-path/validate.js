const fs=require('fs');
function check(path, kernelTests){
  const html=fs.readFileSync(path,'utf8'); let ok=true; const name=path.split('/').pop();
  console.log('\n=== '+name+' ===');
  // structural
  const so=(html.match(/<script\b/g)||[]).length, sc=(html.match(/<\/script>/g)||[]).length;
  const ho=(html.match(/<html/g)||[]).length, hc=(html.match(/<\/html>/g)||[]).length;
  console.log(`  script ${so}/${sc}  html ${ho}/${hc}  bytes ${html.length}`);
  if(so!==sc||hc!==1){ok=false;console.log('  ** tag imbalance');}
  // browser storage forbidden
  if(/localStorage|sessionStorage/.test(html)){ok=false;console.log('  ** uses browser storage');}
  else console.log('  no localStorage/sessionStorage: OK');
  // every getElementById target must exist as an id=
  const ids=new Set([...html.matchAll(/id="([^"]+)"/g)].map(m=>m[1]));
  const refs=[...html.matchAll(/getElementById\('([^']+)'\)/g)].map(m=>m[1]);
  const missing=[...new Set(refs)].filter(r=>!ids.has(r));
  if(missing.length){ok=false;console.log('  ** getElementById with no element:',missing);}
  else console.log(`  all ${new Set(refs).size} getElementById targets resolve: OK`);
  // querySelector ids referenced via '#'? (none expected) — and selstep-style not used here
  // extract + eval kernel, run ground-truth tests
  const k0=html.indexOf('// ===== TS-PORTABLE KERNEL');
  const k1=html.indexOf('// ===== end kernel =====');
  if(k0<0||k1<0){ok=false;console.log('  ** kernel markers not found');return ok;}
  const kernelSrc=html.slice(k0,k1);
  const sandbox={Math,Float64Array,Array,console}; 
  const fn=new Function('Math','Float64Array','Array', kernelSrc+'\n;return {rateFor:typeof rateFor!=="undefined"?rateFor:null, formulaPoint, sampleSeries:typeof sampleSeries!=="undefined"?sampleSeries:null, spectrum:typeof spectrum!=="undefined"?spectrum:null, latticeProject:typeof latticeProject!=="undefined"?latticeProject:null, weylCloud:typeof weylCloud!=="undefined"?weylCloud:null, pca:typeof pca!=="undefined"?pca:null, centerCloud:typeof centerCloud!=="undefined"?centerCloud:null, baselineNN:typeof baselineNN!=="undefined"?baselineNN:null, reflect:typeof reflect!=="undefined"?reflect:null, invertP:typeof invertP!=="undefined"?invertP:null, rotateAx:typeof rotateAx!=="undefined"?rotateAx:null, symScore:typeof symScore!=="undefined"?symScore:null, PHI};');
  const K=fn(Math,Float64Array,Array);
  if(kernelTests==='A'){
    const PI=Math.PI,w0=K.rateFor(0,PI),w1=K.rateFor(1,PI),freqs=[w0-w1,w0,w0+w1],pred=[16.8,72,16.8];
    const {re,im}=K.sampleSeries('torus',PI,80,2,0.5,8192,2,[0,1]);
    const a=K.latticeProject(re,im,0.5,freqs);
    const good=a.every((v,i)=>Math.abs(v-pred[i])<0.01);
    if(!good)ok=false;
    console.log('  EMBEDDED MATH — torus lines: '+a.map(v=>v.toFixed(3)).join(' / ')+'  '+(good?'OK (==16.8/72/16.8)':'**OFF**'));
  } else {
    function rng(s){return()=>{s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff;};}
    const R=rng(1); const P0=[]; for(let i=0;i<800;i++){let v=[R()*2-1,R()*2-1,R()*2-1];const m=Math.hypot(...v)||1;P0.push([v[0]/m*50,v[1]/m*50,v[2]/m*50]);}
    const P=K.centerCloud(P0),base=K.baselineNN(P);
    const sMir=K.symScore(P,K.reflect(P,[1,0,0]),base), sInv=K.symScore(P,K.invertP(P),base);
    // also confirm a real loaded form (staged L2 = sphere) reads symmetric
    let SP=K.weylCloud('staged',80,2,2,500); SP=K.centerCloud(SP); const sb=K.baselineNN(SP);
    const sStaged=K.symScore(SP,K.invertP(SP),sb);
    const good=sMir<1.8&&sInv<1.8&&sStaged<2.2;
    if(!good)ok=false;
    console.log('  EMBEDDED MATH — sphere mirror='+sMir.toFixed(2)+' inv='+sInv.toFixed(2)+' | staged-L2 inv='+sStaged.toFixed(2)+'  '+(good?'OK (symmetric)':'**OFF**'));
  }
  console.log('  => '+(ok?'PASS':'FAIL'));
  return ok;
}
let all=true;
all&=check('/mnt/user-data/outputs/signal-lens.html','A');
all&=check('/mnt/user-data/outputs/symmetry-probe.html','B');
console.log('\nALL TOYS: '+(all?'PASS — built, parse-clean, storage-free, embedded math verified':'FAIL'));
