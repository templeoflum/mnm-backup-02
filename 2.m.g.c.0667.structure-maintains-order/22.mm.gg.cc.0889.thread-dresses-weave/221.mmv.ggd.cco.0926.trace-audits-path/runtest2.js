const fs=require('fs'), vm=require('vm');
const src=fs.readFileSync('ts.html','utf8').match(/<script[^>]*>([\s\S]*?)<\/script>/)[1];

const ctx=new Proxy({},{get:(t,p)=>{ if(p==='canvas')return el; if(p==='measureText')return ()=>({width:10});
  if(p==='createLinearGradient'||p==='createRadialGradient')return ()=>({addColorStop(){}});
  if(p==='getImageData')return ()=>({data:[]}); return (typeof p==='string')?()=>{}:undefined; }});
const store={};
function makeEl(id){ const e={_id:id,style:{},dataset:{},classList:{add(){},remove(){},toggle(){},contains(){return false}},
  children:[],checked:false,value:(id==='sigAxesSel'?'0,1':''),textContent:'',innerHTML:'',
  width:300,height:150,clientWidth:300,clientHeight:150,offsetWidth:300,offsetHeight:150,
  addEventListener(){},removeEventListener(){},appendChild(c){this.children.push(c);return c;},removeChild(){},
  setAttribute(){},getAttribute(){return null;},setPointerCapture(){},releasePointerCapture(){},
  focus(){},select(){},click(){},closest(){return e;},getContext(){return ctx;},
  getBoundingClientRect(){return{width:300,height:200,left:0,top:0,right:300,bottom:200};},
  querySelector(){return e;},querySelectorAll(){return[];},remove(){},contains(){return false;}}; return e; }
function gid(id){ return store[id]||(store[id]=makeEl(id)); }
const el=gid('__g');
let rafFn=null;
const sandbox={
  document:{getElementById:gid,querySelector:()=>el,querySelectorAll:()=>[],createElement:gid,addEventListener(){},body:el,documentElement:el,head:el},
  window:null, navigator:{clipboard:{writeText:()=>Promise.resolve()},userAgent:'node'},
  requestAnimationFrame:(fn)=>{rafFn=fn;}, cancelAnimationFrame(){},
  addEventListener(){}, removeEventListener(){}, devicePixelRatio:1, innerWidth:1200, innerHeight:800,
  setTimeout:(fn)=>0, clearTimeout(){}, setInterval:()=>0, clearInterval(){}, performance:{now:()=>0},
  getComputedStyle:()=>({getPropertyValue:()=>''}), Image:function(){return el;},
  URL:{createObjectURL:()=>'blob:'}, Blob:function(){}, console, alert(){}, prompt:()=>null,
};
sandbox.window=sandbox; sandbox.globalThis=sandbox;
vm.createContext(sandbox);
try{
  vm.runInContext(src, sandbox, {filename:'ts-script.js'});
  console.log('INIT + first frame(): OK (no throw)');
  if(rafFn){ rafFn(16); console.log('steady-state frame(): OK'); }
  // now flip the lens toggles ON and run a frame, to test the lens paths in-bench
  store['signalChk'].checked=true; store['symChk'].checked=true;
  // seed meas.cloud via a frame (analyzeLocus runs on fc%4) — run several frames
  for(let i=0;i<6 && rafFn;i++){ rafFn(16); }
  console.log('frames with BOTH lenses ON: OK');
}catch(e){
  console.log('*** RUNTIME ERROR ***\n'+e.constructor.name+': '+e.message);
  const line=(e.stack||'').split('\n').find(l=>l.includes('ts-script.js'));
  console.log('at '+(line||'(no script frame)').trim());
}
