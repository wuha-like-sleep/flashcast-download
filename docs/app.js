import { API, senderAssets } from './releases.js';
const labels = {android:'下载 Android APK',windows:'下载 Windows 版',windowsZip:'免安装版 ↗',macArm:'下载 Apple 芯片版',macIntel:'Intel 芯片版 ↗',linuxDeb:'下载 DEB ↗',linuxTar:'下载 TAR.GZ ↗'};
const status = document.querySelector('#release-status');
let loading = false;
async function refresh() {
  if (loading) return;
  loading = true;
  document.querySelector('#download-error').hidden = true;
  status.textContent = '正在获取最新正式版…';
  try {
    const response = await fetch(API, {cache:'no-store', headers:{Accept:'application/vnd.github+json'},signal:AbortSignal.timeout(10000)});
    if (!response.ok) throw new Error('Release unavailable');
    const release = await response.json();
    const assets = senderAssets(release);
    for (const link of document.querySelectorAll('[data-asset]')) {
      const key = link.dataset.asset, asset = assets[key];
      link.textContent = asset ? labels[key] + (link.classList.contains('button') ? ' ↓' : '') : '此版本暂未提供';
      link.setAttribute('aria-disabled', String(!asset));
      if (asset) {link.href = asset.url; link.setAttribute('aria-label', labels[key] + ' ' + release.tag_name);}
      else link.removeAttribute('href');
      const meta = document.querySelector(`[data-meta="${key}"]`);
      if (meta && asset) meta.textContent = `${release.tag_name} · ${(asset.size / 1048576).toFixed(1)} MB`;
    }
    status.textContent = `最新正式版 ${release.tag_name}`;
    recommend();
  } catch {
    status.textContent = '最新版本暂时不可用';
    document.querySelector('#download-error').hidden = false;
    for (const link of document.querySelectorAll('[data-asset]')) {
      link.removeAttribute('href'); link.setAttribute('aria-disabled','true');
      link.textContent = link.classList.contains('button') ? '等待获取最新版本' : labels[link.dataset.asset];
    }
    recommend();
  } finally {loading = false;}
}
document.querySelector('#retry').addEventListener('click', refresh);
const ua = navigator.userAgent;
const platform = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) ? 'ios' : /Android/.test(ua) ? 'android' : /Windows/.test(ua) ? 'windows' : /Macintosh/.test(ua) ? 'macos' : null;
if (platform) {
 const card = document.querySelector(`[data-platform="${platform}"]`);
 card.classList.add('recommended'); card.querySelector('.platform-tag').textContent = '当前设备';
}
function recommend() {
 const action = document.querySelector('#recommended-download');
 const note = document.querySelector('#recommended-note');
 if (!platform) return;
 const card = document.querySelector(`[data-platform="${platform}"]`);
 const link = card.querySelector('.button');
 if (platform !== 'macos' && link.hasAttribute('href')) {
   action.href = link.href;
   action.textContent = platform === 'ios' ? '在 App Store 下载 ↗' : labels[platform] + ' ↓';
 } else {
   action.href = '#download-' + platform;
   action.textContent = platform === 'macos' ? '选择 Mac 芯片版本 ↓' : '查看设备下载选项 ↓';
 }
 note.textContent = platform === 'macos' ? 'Apple M 系列与 Intel 芯片均有对应版本' : '已为你找到当前设备的下载选项 · 其他系统请见下方';
}
recommend();
refresh();
