interface Book {
  id: number,
  photos: string []
  author: string,
  title: string,
  available: boolean,
  publisher: string,
  publicationDate: Date,
  description: string
}

export type { Book }
