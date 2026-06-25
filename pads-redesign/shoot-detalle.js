const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs');
const URL='http://127.0.0.1:8099/detalle.html';
const localCss=fs.readFileSync('fonts/local.css','utf8');
(async()=>{
  const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--no-sandbox','--disable-dev-shm-usage']});
  const shots=[
    {name:'det-desktop-full',w:1440,h:1000,dpr:1,full:true},
    {name:'det-desktop-top',w:1440,h:1000,dpr:1,full:false},
    {name:'det-mobile-full',w:390,h:844,dpr:2,full:true},
    {name:'det-mobile-top',w:390,h:844,dpr:2,full:false},
  ];
  for(const s of shots){
    const ctx=await b.newContext({viewport:{width:s.w,height:s.h},deviceScaleFactor:s.dpr,isMobile:s.w<700});
    const p=await ctx.newPage();
    await p.goto(URL,{waitUntil:'load',timeout:60000});
    await p.addStyleTag({content:localCss});
    await p.evaluate(()=>document.fonts&&document.fonts.ready).catch(()=>{});
    await p.evaluate(()=>document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in')));
    await p.waitForTimeout(900);
    await p.screenshot({path:`shots/${s.name}.png`,fullPage:s.full});
    console.log('shot',s.name);
    await ctx.close();
  }
  await b.close();
})().catch(e=>{console.error('FATAL',e);process.exit(1);});
