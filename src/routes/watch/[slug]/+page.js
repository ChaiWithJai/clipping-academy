import { error } from '@sveltejs/kit';
import { clips } from '#lib/clips.js';

export const entries = () => clips.map((clip) => ({ slug: clip.id }));

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const index = clips.findIndex((clip) => clip.id === params.slug);
  if (index === -1) error(404, 'This lesson could not be found.');
  return { clip: clips[index], next: clips[(index + 1) % clips.length] };
}
