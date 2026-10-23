<script>
  let { diagonal = false } = $props();
</script>

<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
  {#if diagonal}
    <path d="M6 18 18 6M6 6h12v12" />
  {:else}
    <path d="M4 12h15m-6-6 6 6-6 6" />
  {/if}
</svg>

<style>
  svg { width: 20px; height: 20px; flex: 0 0 auto; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
</style>
