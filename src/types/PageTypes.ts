export interface PageTypes {
  _type: string
  _id: string
  title: string
  _updatedAt: Date
  content: Content[]
  slug: Slug
  _createdAt: Date
  _rev: string
}

export interface Content {
  markDefs: any[]
  children: Child[]
  _type: string
  style: string
  _key: string
}

export interface Child {
  _type: string
  marks: any[]
  text: string
  _key: string
}

export interface Slug {
  current: string
  _type: string
}
