import { Book } from 'api/books'
import { BookFormFields } from 'components/forms/BookFormModal/BookFormModal'

export const mapApiBookToBookFormField = (book: Book): BookFormFields => (
  {
    serialNumber: book.serialNumber,
    title: book.name,
    author: book.author,
    description: book.description,
    publicationDate: new Date(book.publicationDate),
    publisher: book.publisher,
  }
)
