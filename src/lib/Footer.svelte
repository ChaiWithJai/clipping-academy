<script>
  import Mark from './Mark.svelte';
  import Arrow from './Arrow.svelte';
  import { sourceUrl } from './clips.js';
</script>

<footer class="site-footer shell">
  <a href="/" class="footer-brand"><Mark /><span>The New Business School with Jai</span></a>
  <span>Made from real teaching.</span>
  <a href={sourceUrl}>The full workshop <Arrow diagonal /></a>
</footer>
