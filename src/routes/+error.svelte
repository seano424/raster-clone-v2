<script>
  import { page } from '$app/stores'
</script>

<h1>{$page.status}: {$page.error?.message ?? 'Uncertain error'}</h1>
