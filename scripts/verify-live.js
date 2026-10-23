import assert from 'node:assert/strict';
import { clips } from '../src/lib/clips.js';

const base = process.argv[2] || 'https://clipping-academy.netlify.app';
const homepage = await fetch(base);
assert.equal(homepage.status, 200);
const html = await homepage.text();
assert.ok(html.includes('One live workshop.'));
assert.ok(html.includes('Six useful lessons.'));
for (const clip of clips) {
  const page = await fetch(`${base}/watch/${clip.id}/`);
  assert.equal(page.status, 200, `Lesson page failed: ${clip.id}`);
  assert.ok((await page.text()).includes(clip.video));
  const video = await fetch(`${base}${clip.video}`, { headers: { Range: 'bytes=0-1023' } });
  assert.equal(video.status, 206, `Video range request failed: ${clip.id}`);
  assert.match(video.headers.get('content-type'), /video\/mp4/);
  const bytes = new Uint8Array(await video.arrayBuffer());
  assert.equal(bytes.length, 1024);
  assert.equal(new TextDecoder().decode(bytes.subarray(4, 8)), 'ftyp');
  const caption = await fetch(`${base}${clip.captions}`);
  assert.equal(caption.status, 200);
  assert.match(caption.headers.get('content-type'), /text\/vtt/);
  assert.ok((await caption.text()).startsWith('WEBVTT'));
  console.log(`PASS ${clip.id}: page, video streaming, captions`);
}
console.log(`Verified all six lessons at ${base}`);
