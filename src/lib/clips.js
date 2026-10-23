import clips from './clips.json' with { type: 'json' };

export { clips };
export const sourceUrl = 'https://www.youtube.com/watch?v=0DvOP8moyME';
export const workshopUrl = 'https://chaiwithjai.com/workshops';

/** @param {number} seconds */
export function durationLabel(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}
