// _capguard.mjs — network isolation for capture. (lantern, capture-isolation build 20260708)
//
// escape #1 (incident.dispatch-estop-disabled): a rendered artifact must NEVER reach
// localhost (the dispatch API / the e-stop) or any network while we screenshot it.
// isolatedContext() returns a Playwright BrowserContext that ABORTS every network
// request; only local schemes (file:, data:, about:, blob:) are allowed through, so
// the page still renders from disk but cannot phone home.
//
// usage:
//   import { isolatedContext } from './_capguard.mjs';
//   const ctx  = await isolatedContext(browser, { viewport: { width: 1280, height: 800 } });
//   const page = await ctx.newPage();
//   await page.goto(fileUrl, { waitUntil: 'load' });   // NOT 'networkidle' — network is blocked
//   await page.screenshot({ ... });

const LOCAL = /^(file:|data:|about:|blob:)/i;

export async function isolatedContext(browser, opts = {}) {
  const context = await browser.newContext(opts);
  // abort ALL non-local requests: http/https/ws/wss, localhost, 127.0.0.1, any host.
  await context.route('**/*', (route) => {
    const url = route.request().url();
    if (LOCAL.test(url)) return route.continue();
    return route.abort('blockedbyclient');
  });
  return context;
}

// convenience: an isolated context + a page in one call.
export async function isolatedPage(browser, opts = {}) {
  const context = await isolatedContext(browser, opts);
  const page = await context.newPage();
  return { context, page };
}
