import {cp, mkdir, writeFile} from 'node:fs/promises';
import {API, senderAssets} from '../docs/releases.js';

const headers = {Accept:'application/vnd.github+json'};
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
const response = await fetch(API, {headers, signal:AbortSignal.timeout(20000)});
if (!response.ok) throw new Error(`Latest release lookup failed (${response.status})`);
const release = await response.json();
const assets = senderAssets(release);
// Publish only the public sender metadata that the page actually needs.
const manifest = {
  tag_name: release.tag_name,
  published_at: release.published_at,
  synchronized_at: new Date().toISOString(),
  draft: false,
  prerelease: false,
  assets: Object.values(assets).map(a => ({name:a.name,size:a.size,state:'uploaded',browser_download_url:a.url})),
};
await mkdir('_site', {recursive:true});
await cp('docs','_site',{recursive:true});
await writeFile('_site/latest.json',JSON.stringify(manifest,null,2)+'\n');
console.log(`Synced ${manifest.tag_name}: ${manifest.assets.length} sender downloads`);
