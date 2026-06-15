// TS — entry point. Brings up WebGPU and clears the canvas each frame.
// This is the bare stack proving it runs; the formula's atomic units land
// next, built and proven one at a time.

const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const msg = document.querySelector('#msg') as HTMLDivElement;

async function main(): Promise<void> {
  if (!navigator.gpu) { msg.textContent = 'WebGPU is not available in this browser.'; return; }
  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) { msg.textContent = 'No WebGPU adapter found.'; return; }
  const device = await adapter.requestDevice();
  const ctx = canvas.getContext('webgpu') as GPUCanvasContext;
  const format = navigator.gpu.getPreferredCanvasFormat();
  ctx.configure({ device, format, alphaMode: 'premultiplied' });

  function resize(): void {
    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = Math.round(canvas.clientWidth * dpr);
    canvas.height = Math.round(canvas.clientHeight * dpr);
  }
  resize();
  window.addEventListener('resize', resize);

  function frame(): void {
    const encoder = device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [{
        view: ctx.getCurrentTexture().createView(),
        clearValue: { r: 0.02, g: 0.03, b: 0.05, a: 1 },
        loadOp: 'clear',
        storeOp: 'store',
      }],
    });
    pass.end();
    device.queue.submit([encoder.finish()]);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  msg.textContent = '';
}

main().catch((e: unknown) => {
  msg.textContent = 'WebGPU init failed: ' + (e instanceof Error ? e.message : String(e));
});
