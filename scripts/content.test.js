import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { clips, durationLabel } from '../src/lib/clips.js';

test('the collection contains six unique, complete lessons', () => {
  assert.equal(clips.length, 6);
  assert.equal(new Set(clips.map((clip) => clip.id)).size, 6);
  for (const clip of clips) {
    assert.ok(clip.title.length < 55);
    assert.ok(clip.takeaway && clip.practice && clip.sourceUrl);
    assert.ok(clip.duration > 10 && clip.duration < 180);
    assert.equal(clip.sourceStart, clip.sourceRanges[0][0]);
    assert.ok(Math.abs(clip.sourceRanges.reduce((sum, [start, end]) => sum + end - start, 0) - clip.duration) < 0.6);
  }
});

test('every video, poster, and caption file is present and nonempty', () => {
  for (const clip of clips) {
    for (const asset of [clip.video, clip.poster, clip.captions, `/posters/${clip.id}-vertical.webp`]) {
      assert.ok(statSync(`static${asset}`).size > 100, `Missing asset: ${asset}`);
    }
    assert.ok(statSync(`static${clip.video}`).size > 1_000_000);
    const captions = readFileSync(`static${clip.captions}`, 'utf8');
    assert.ok(captions.startsWith('WEBVTT\n'));
    assert.match(captions, /\d{2}:\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}:\d{2}\.\d{3}/);
    assert.ok(!captions.includes(' --> undefined'));
  }
});

test('short and minute-long durations have readable labels', () => {
  assert.equal(durationLabel(9), '0:09');
  assert.equal(durationLabel(65), '1:05');
  assert.equal(durationLabel(80), '1:20');
});
