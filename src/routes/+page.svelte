<script>
  import { PortableText } from '@portabletext/svelte'
  export let data
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<h1 class="text-red-600">Welcome to SvelteKit</h1>

{#if data.pages && data.pages.length}
  <ul>
    {#each data.pages as page}
      <li>{page.title}</li>
      <PortableText value={page.content} />
    {/each}
  </ul>
{:else}
  <p>No page found.</p>
{/if}

{#if data.pages && data.pages.length}
  <pre>
{JSON.stringify(data.pages, null, 2)}
</pre>
{:else}
  <p>Your data will show up here when you've configured everything correctly</p>
{/if}
