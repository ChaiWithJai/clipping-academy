<script>
  import Header from '#lib/Header.svelte';
  import Footer from '#lib/Footer.svelte';
  import Arrow from '#lib/Arrow.svelte';
  import { clips, durationLabel } from '#lib/clips.js';
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.clip.title} · Clipping Academy</title>
  <meta name="description" content={data.clip.takeaway} />
  <meta property="og:title" content={data.clip.title} />
  <meta property="og:description" content={data.clip.takeaway} />
  <meta property="og:image" content="/social-card.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<a class="skip-link" href="#lesson">Skip to the lesson</a>
<Header />
<main id="lesson" class="watch-page shell">
  <a class="back-link" href="/#lessons"><span aria-hidden="true">←</span> All six lessons</a>
  <div class="watch-layout">
    <div class="player-wrap">
      {#key data.clip.id}
        <video controls playsinline preload="metadata" poster={`/posters/${data.clip.id}-vertical.webp`} aria-label={data.clip.title}>
          <source src={data.clip.video} type="video/mp4" />
          <track kind="captions" src={data.clip.captions} srclang="en" label="English" />
          <p>Your browser cannot play this video. <a href={data.clip.video}>Download the clip.</a></p>
        </video>
      {/key}
    </div>
    <div class="lesson-content"><p class="eyebrow">LESSON {data.clip.number} OF 06 <span>/{durationLabel(data.clip.duration)}</span></p><h1>{data.clip.title}</h1><p class="lesson-takeaway">{data.clip.takeaway}</p>
      <div class="lesson-actions"><a class="button button-dark" href={data.clip.video} download>Download the clip <span aria-hidden="true">↓</span></a><a class="text-link" href={`${data.clip.sourceUrl}&t=${Math.floor(data.clip.sourceStart)}`}>See it in context <Arrow diagonal /></a></div>
      <details class="try-it"><summary>Try this in your own work <span aria-hidden="true">+</span></summary><p>{data.clip.practice}</p><small>Keep it small. One useful step is enough.</small></details>
      <nav class="lesson-list" aria-label="Workshop lessons">{#each clips as clip (clip.id)}<a href={`/watch/${clip.id}/`} aria-current={clip.id === data.clip.id ? 'page' : undefined}><span>{clip.number}</span><strong>{clip.title}</strong><small>{durationLabel(clip.duration)}</small></a>{/each}</nav>
      <a class="next-lesson" href={`/watch/${data.next.id}/`}>Next: {data.next.title} <Arrow /></a>
    </div>
  </div>
</main>
<Footer />
