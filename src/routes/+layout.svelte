<script>
  import Header from '$lib/components/Header.svelte'
  import '../app.css'
</script>

<div class="flex flex-col min-h-screen">
  <Header />

  <main class="flex-1 container">
    <slot />
  </main>

  <footer class="container">
    <p>
      visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
    </p>
  </footer>
</div>
