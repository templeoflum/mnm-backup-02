// kit — the UI/control library gallery. Each component shown on its own to see and
// interact with in isolation. Scaffold only: the component set + the declarative
// param shape come next, per the operator's doc. See frame.kit.f0 at 210.

const gallery = /** @type {HTMLElement} */ (document.querySelector('#gallery'));

/** Render a placeholder until the components land. */
function placeholder() {
  const el = document.createElement('div');
  el.className = 'note';
  el.textContent = 'kit — scaffold ready · components pending';
  gallery.appendChild(el);
}

placeholder();
