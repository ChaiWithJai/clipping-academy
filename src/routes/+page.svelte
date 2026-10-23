<script>
  import Header from '#lib/Header.svelte';
  import Footer from '#lib/Footer.svelte';
  import Arrow from '#lib/Arrow.svelte';
  import { clips, durationLabel, sourceUrl, workshopUrl } from '#lib/clips.js';
</script>

<svelte:head>
  <title>Clipping Academy · The New Business School with Jai</title>
  <meta name="description" content="Six short lessons from a live AI workshop with Jai and Nicole. Watch the clips, try the ideas, and see how we used AI to make them." />
  <meta property="og:title" content="One live workshop. Six useful lessons." />
  <meta property="og:description" content="Real questions. Practical AI. Short lessons from The New Business School with Jai." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="/social-card.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<a class="skip-link" href="#lessons">Skip to the lessons</a>
<Header />

<main>
  <section class="hero shell" aria-labelledby="hero-heading">
    <div class="eyebrow"><span class="status-dot"></span> BIG IDEAS. SMALL LESSONS.</div>
    <h1 id="hero-heading">One live workshop.<br /><span>Six useful lessons.</span></h1>
    <p class="hero-intro">Watch Jai and Nicole work through AI, one idea at a time.<br class="desktop-break" /> Real questions, clear explanations, and something you can try.</p>
    <div class="hero-actions">
      <a href="#lessons" class="button button-dark">Explore the clips <Arrow /></a>
      <a href="#process" class="text-link">See how we made them <span aria-hidden="true">↘</span></a>
    </div>

    <div class="studio-preview">
      <div class="studio-topbar"><span><i></i> THE LIVE CLASSROOM</span><span>SESSION 001 <span class="topbar-divider">/</span> OCT 23, 2026</span></div>
      <div class="studio-content">
        <a class="featured-video" href={`/watch/${clips[0].id}/`} aria-label="Watch lesson 1: Get comfortable with AI">
          <img src={clips[0].poster} alt="Jai teaching AI at a whiteboard during the live workshop" width="960" height="495" fetchpriority="high" />
          <div class="featured-shade"></div>
          <span class="play-disc"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 11 7-11 7Z" /></svg></span>
          <div class="featured-caption"><span>START WITH ONE IDEA</span><strong>AI feels overwhelming?<br />You’re in the right place.</strong><small>Watch the first clip <span aria-hidden="true">↗</span></small></div>
          <span class="video-time">0:53</span>
        </a>
        <div class="session-note">
          <span class="note-eyebrow">FROM THE WORKSHOP</span>
          <h2>Reversing the<br />AI Gender Gap</h2>
          <p>A live lesson with Jai Bhagat and Nicole Mercede on getting started, making better choices, and building with AI.</p>
          <div class="session-meta"><div class="avatar-stack"><img src="/posters/jai.webp" alt="" width="40" height="40" /><img src="/posters/nicole.webp" alt="" width="40" height="40" /></div><span>Two people.<br /><strong>Learning by doing.</strong></span></div>
          <a href={sourceUrl}>Watch the full conversation <Arrow diagonal /></a>
        </div>
      </div>
      <div class="studio-timeline"><span>ONE CONVERSATION</span><div class="timeline-track">{#each clips as clip (clip.id)}<a href={`/watch/${clip.id}/`} aria-label={`Watch lesson ${clip.number}: ${clip.title}`}><span>{clip.number}</span><i></i></a>{/each}</div><span>SIX TAKEAWAYS</span></div>
    </div>
    <div class="hero-footnote"><span class="tiny-cross" aria-hidden="true">+</span><span>Free to watch. No account needed.</span><span class="footnote-line"></span><span>About five minutes of learning.</span><span class="tiny-cross" aria-hidden="true">+</span></div>
  </section>

  <section id="lessons" class="lessons-section shell" aria-labelledby="lessons-heading">
    <div class="section-heading"><div><p class="eyebrow">THE CLIP COLLECTION <span>/ 001</span></p><h2 id="lessons-heading">A little less scrolling.<br /><span>A little more understanding.</span></h2></div><p>Pick something you’re working on.<br />Take one idea back to your day.</p></div>
    <div class="clip-grid">
      {#each clips as clip (clip.id)}
        <article class="clip-card">
          <a class="clip-watch" href={`/watch/${clip.id}/`} aria-label={`Watch ${clip.title}, ${durationLabel(clip.duration)}`}>
            <div class="clip-image"><img src={clip.poster} alt={clip.number === '06' ? 'Nicole sharing her experience of learning AI in public' : 'Jai explaining an AI concept in the live classroom'} width="960" height="495" loading="lazy" /><span class="card-play"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 11 7-11 7Z" /></svg></span><span class="duration">{durationLabel(clip.duration)}</span></div>
            <div class="clip-meta"><span>{clip.number} <i>/</i> {clip.label}</span><Arrow diagonal /></div>
            <h3>{clip.title}</h3>
          </a>
          <p>{clip.takeaway}</p>
          <a class="clip-download" href={clip.video} download>Download clip <span aria-hidden="true">↓</span></a>
        </article>
      {/each}
    </div>
  </section>

  <section id="process" class="process-section" aria-labelledby="process-heading">
    <div class="shell">
      <div class="section-heading"><div><p class="eyebrow">BEHIND THE CLIPS</p><h2 id="process-heading">AI helps with the work.<br /><span>The lesson comes first.</span></h2></div><p>I use AI to make more room for teaching.<br />Here’s how we made this collection.</p></div>
      <div class="process-grid">
        <article><div class="step-line"><span>01</span><svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="5" y="5" width="22" height="22" rx="4"/><path d="m13 11 9 5-9 5Z"/></svg></div><h3>Keep the whole conversation.</h3><p>We downloaded my YouTube livestream with yt-dlp, a tool that saves the recording. Every clip starts with the original lesson.</p><span class="tool-label">YOUTUBE + YT-DLP</span></article>
        <article><div class="step-line"><span>02</span><svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M6 11h20M6 16h15M6 21h10M24 19v9m-4-4h8"/></svg></div><h3>Find an idea worth keeping.</h3><p>Whisper made a transcript locally. An AI assistant used it to select complete ideas, check the context, and choose clear openings and endings.</p><span class="tool-label">WHISPER + AI ASSISTANCE</span></article>
        <article><div class="step-line"><span>03</span><svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M6 6h20v20H6zM11 12h10m-10 4h10m-10 4h6"/></svg></div><h3>Make it easy to watch.</h3><p>FFmpeg made the vertical videos, added captions, and balanced the audio. We checked the exports and left the full lesson one click away.</p><span class="tool-label">FFMPEG + PLAYBACK CHECKS</span></article>
      </div>
      <div class="process-principle"><span class="principle-mark" aria-hidden="true">✳</span><p>A useful clip carries a complete thought.<br /><strong>The goal is understanding, not just attention.</strong></p><a href="https://github.com/ChaiWithJai/clipping-academy">See the project <Arrow diagonal /></a></div>
    </div>
  </section>

  <section class="learn-section shell" aria-labelledby="learn-heading"><div><p class="eyebrow">THE NEW BUSINESS SCHOOL WITH JAI</p><h2 id="learn-heading">You can build with AI.<br /><span>Let’s learn how.</span></h2><p>I teach people who aren’t engineers to make good choices with AI and build things they care about. Bring your questions. We’ll work through them together.</p><a class="button button-dark" href={workshopUrl}>Explore the workshops <Arrow diagonal /></a></div><div class="learn-note"><span class="note-pin" aria-hidden="true"></span><span>JAI’S APPROACH</span><blockquote>“It is extremely, extremely important to hold space for the whimsy.”</blockquote><a href={`${sourceUrl}&t=421`}>From the live workshop <Arrow diagonal /></a><div class="note-signature">Life is so rich,<br /><strong>Jai</strong></div></div></section>
</main>

<Footer />
