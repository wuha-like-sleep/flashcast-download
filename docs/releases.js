export const API = 'https://api.github.com/repos/wuha-like-sleep/flashcast-download/releases/latest';
const base = 'https://github.com/wuha-like-sleep/flashcast-download/releases/download/';
const formats = {
  android: /^FlashCast-\d+\.\d+\.\d+-android\.apk$/,
  windows: /^FlashCast-Setup-\d+\.\d+\.\d+-windows-x64\.exe$/,
  windowsZip: /^FlashCast-\d+\.\d+\.\d+-windows-x64\.zip$/,
  macArm: /^FlashCast-\d+\.\d+\.\d+-macos-arm64\.dmg$/,
  macIntel: /^FlashCast-\d+\.\d+\.\d+-macos-x86_64\.dmg$/,
  linuxDeb: /^flashcast_\d+\.\d+\.\d+_amd64\.deb$/,
  linuxTar: /^flashcast-\d+\.\d+\.\d+-linux-amd64\.tar\.gz$/,
};
export function senderAssets(release) {
  if (release.draft || release.prerelease || !/^v?\d+\.\d+\.\d+$/.test(release.tag_name)) throw new Error('Not a stable release');
  const found = {};
  for (const [key, pattern] of Object.entries(formats)) {
    const asset = (release.assets || []).find(a => pattern.test(a.name) && a.state === 'uploaded' && a.size > 0);
    if (!asset) continue;
    const expected = base + encodeURIComponent(release.tag_name) + '/' + encodeURIComponent(asset.name);
    if (asset.browser_download_url !== expected) continue;
    found[key] = {url: expected, name: asset.name, size: asset.size};
  }
  if (!Object.keys(found).length) throw new Error('No sender downloads');
  return found;
}
