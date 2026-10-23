<script>
  import Mark from './Mark.svelte';
  import Arrow from './Arrow.svelte';
  import { workshopUrl } from './clips.js';
</script>

<header class="site-header shell">
  <a href="/" class="brand" aria-label="Clipping Academy home">
    <span class="brand-mark"><Mark /></span>
    <span>Clipping Academy<span class="brand-school">The New Business School with Jai</span></span>
  </a>
  <nav aria-label="Main navigation">
    <a href="/#lessons">The clips</a>
    <a href="/#process" class="process-link">Our process</a>
    <a class="nav-cta" href={workshopUrl}>Learn with Jai <Arrow diagonal /></a>
  </nav>
</header>
