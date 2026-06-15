const fs=require('fs');
// extract the script
const m=fs.readFileSync('ts.html','utf8').match(/<script[^>]*>([\s\S]*?)<\/script>/);
const src=m[1];

// ---- minimal DOM/window mock, enough to catch init + first-frame runtime errors ----
const ctx=new Proxy({}, {get:(t,p)=>{ if(p==='canvas')return el; if(p==='measureText')return ()=>({width:10});
  if(p==='createLinearGradient'||p==='createRadialGradient')return ()=>({addColorStop(){}});
  if(p==='getImageData')return ()=>({data:[]}); return (typeof p==='string')?()=>{}:undefined; }});
const elStore={};
function makeEl(id){
  const e={ _id:id, style:{}, dataset:{}, classList:{add(){},remove(){},toggle(){},contains(){return false}},
    children:[], checked:false, value:(id==='sigAxesSel'?'0,1':''), textContent:'', innerHTML:'',
    width:300,height:150, clientWidth:300, clientHeight:150, offsetWidth:300, offsetHeight:150,
    addEventListener(){}, removeEventListener(){}, appendChild(c){this.children.push(c);return c;}, removeChild(){},
    setAttribute(){}, getAttribute(){return null;}, setPointerCapture(){}, releasePointerCapture(){},
    focus(){}, select(){}, click(){}, closest(){return e;}, getContext(){return ctx;},
    getBoundingClientRect(){return {width:300,height:200,left:0,top:0,right:300,bottom:200};},
    querySelector(){return e;}, querySelectorAll(){return [];}, remove(){}, contains(){return false;} };
  return e;
}
function gid(id){ return elStore[id]||(elStore[id]=makeEl(id)); }
const el=gid('__generic');
const document={ getElementById:gid, querySelector:()=>el, querySelectorAll:()=>[], createElement:gid,
  addEventListener(){}, body:el, documentElement:el, head:el };
let rafFn=null;
const window={ devicePixelRatio:1, innerWidth:1200, innerHeight:800, addEventListener(){}, removeEventListener(){},
  requestAnimationFrame:(fn)=>{rafFn=fn;}, matchMedia:()=>({matches:false,addEventListener(){}}),
  getComputedStyle:()=>({getPropertyValue:()=>''}) };
const navigator={clipboard:{writeText:()=>Promise.resolve()}, userAgent:'node'};

try{
  const run=new Function('document','window','navigator','requestAnimationFrame','cancelAnimationFrame',
    'devicePixelRatio','innerWidth','innerHeight','setTimeout','clearTimeout','setInterval','performance',
    'getComputedStyle','Image','URL','Blob','console','Math',
    src);
  run(document, window, navigator, window.requestAnimationFrame, ()=>{}, 1, 1200, 800,
    (fn)=>{}, ()=>{}, (fn)=>{}, {now:()=>0}, window.getComputedStyle, function(){return el;},
    {createObjectURL:()=>'blob:'}, function(){}, console, Math);
  console.log('INIT + first frame(): no throw');
  // run one more frame via the recorded rafFn to exercise the steady-state loop
  if(rafFn){ rafFn(16); console.log('second frame(): no throw'); }
}catch(e){
  console.log('*** RUNTIME ERROR ***');
  console.log(e.constructor.name+': '+e.message);
  console.log((e.stack||'').split('\n').slice(0,4).join('\n'));
}
