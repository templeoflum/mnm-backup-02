// pool.js — the pile's source-provider classifier. The pile is one list the editor
// places from; backends (upload · local folder · later Drive) all funnel into it and
// the editor never knows which. The upload input filters by `accept`; a folder has no
// such filter, so folder entries are classified here by extension. Pure (no DOM, no
// File System Access API) — pool.proof.js checks it under node. The async folder read
// itself (showDirectoryPicker, getFile) lives in index.html alongside the upload reader.

/** @typedef {'image'|'text'} Kind */

const IMG_EXT = /\.(png|jpe?g|gif|webp|avif|bmp|svg)$/i;
const TXT_EXT = /\.(txt|md|markdown|csv|json|html?)$/i;

/**
 * Classify a filename into a pile kind by extension, or null to skip it.
 * @param {string} name @returns {Kind|null}
 */
export function folderKind(name) {
  if (IMG_EXT.test(name)) return 'image';
  if (TXT_EXT.test(name)) return 'text';
  return null;
}
