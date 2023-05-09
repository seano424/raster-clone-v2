import { createClient } from '@sanity/client'
import type { PageTypes } from '../types/PageTypes'

const client = createClient({
  projectId: 'm0r837b6',
  dataset: 'production',
  apiVersion: '2023-05-09',
  useCdn: false,
})

export async function load() {
  const data: PageTypes[] = await client.fetch(`*[_type == "page"]`)

  if (data) {
    return {
      pages: data,
    }
  }
  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}
