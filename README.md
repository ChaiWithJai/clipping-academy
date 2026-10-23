# Clipping Academy

Six short lessons from **Reversing the AI Gender Gap**, a live workshop from The New Business School with Jai, featuring Jai Bhagat and Nicole Mercede.

Built with Svelte 5, SvelteKit 3, and static rendering. Hosted on Netlify. The MP4s, captions, and poster images are included in the repository so the deployed collection does not depend on a private Drive link or a local server.

## Local development

Use Node 24 or newer.

```sh
npm ci
npm run dev
```

## Validate and deploy

```sh
npm run check
npm test
npm run build
netlify deploy --prod --dir=build --no-build
npm run verify:live
```

Netlify uses the build and publish settings in `netlify.toml`. GitHub Actions checks types, content integrity, and the production build. Each lesson has a stable `/watch/<lesson-id>/` URL, a downloadable MP4, English WebVTT captions, and a link to its original workshop timestamp. Videos are requested only when a viewer opens a lesson; the collection page loads lightweight poster images.

## How the clips were made

The YouTube recording was downloaded with yt-dlp. Whisper small.en created a local transcript. An AI assistant selected complete teaching moments, reviewed source context, and used FFmpeg to create captioned vertical clips with balanced audio. The site describes the actual workflow rather than offering an automated clipping service.

Source: https://www.youtube.com/watch?v=0DvOP8moyME

Website content and media belong to their respective creators. Public source availability does not grant a separate license to redistribute the workshop footage.
