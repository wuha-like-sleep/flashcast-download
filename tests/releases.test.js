import {test} from 'node:test';
import assert from 'node:assert/strict';
import {senderAssets} from '../docs/releases.js';
const names=['FlashCast-0.4.5-android.apk','FlashCast-TV-0.4.5-androidtv.apk','FlashCast-Setup-0.4.5-windows-x64.exe','FlashCast-Receiver-Setup-0.4.5-windows-x64.exe','ByWave-TV-0.4.5-androidtv.apk','FlashCast-Box-0.4.5-amd64.img.xz'];
const release={tag_name:'v0.4.5',draft:false,prerelease:false,assets:names.map(name=>({name,state:'uploaded',size:123,browser_download_url:`https://github.com/wuha-like-sleep/flashcast-download/releases/download/v0.4.5/${name}`}))};
test('Only full sender packages are selected; TV, receiver, brand and box assets are excluded',()=>assert.deepEqual(Object.keys(senderAssets(release)),['android','windows']));
test('Drafts and previews cannot become download targets',()=>{for(const patch of [{draft:true},{prerelease:true},{tag_name:'v0.4.6-preview'}]) assert.throws(()=>senderAssets({...release,...patch}));});
test('Unexpected external download URLs are rejected',()=>assert.throws(()=>senderAssets({...release,assets:[{...release.assets[0],browser_download_url:'https://example.com/package.apk'}]})));
test('An incomplete release does not fall back to old packages',()=>{const assets=senderAssets({...release,assets:[release.assets[0]]});assert.equal(assets.windows,undefined);});
