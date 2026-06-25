const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs');

const URL = 'http://127.0.0.1:8099/index.html';
const localCss = fs.readFileSync('fonts/local.css', 'utf8'); // @font-face -> fonts/*.woff2 (relative to page origin)

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });

  const shots = [
    { name: 'mobile-full',  width: 390, height: 844, dpr: 2, full: true },
    { name: 'mobile-hero',  width: 390, height: 844, dpr: 2, full: false },
    { name: 'desktop-full', width: 1440, height: 1000, dpr: 1, full: true },
    { name: 'desktop-hero', width: 1440, height: 1000, dpr: 1, full: false },
  ];

  for (const s of shots) {
    const ctx = await browser.newContext({
      viewport: { width: s.width, height: s.height },
      deviceScaleFactor: s.dpr,
      isMobile: s.width < 700,
    });
    const page = await ctx.newPage();
    await page.goto(URL, { waitUntil: 'load', timeout: 60000 });
    // inject real fonts (Google Fonts blocked by proxy in headless)
    await page.addStyleTag({ content: localCss });
    await page.evaluate(() => document.fonts && document.fonts.ready).catch(()=>{});
    await page.evaluate(() => document.querySelectorAll('.reveal').forEach(el => el.classList.add('in')));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `shots/${s.name}.png`, fullPage: s.full });
    console.log('shot', s.name, 'done');
    await ctx.close();
  }
  await browser.close();
})().catch(e => { console.error('FATAL', e); process.exit(1); });
