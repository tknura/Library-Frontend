import * as yup from 'yup'

export const bookFormSchema = yup.object().shape({
  serialNumber: yup
    .number()
    .min(0, 'screen.manageBooks.errors.serialNumber.min')
    .required('screen.manageBooks.errors.serialNumber.required'),
  title: yup
    .string()
    .required('screen.manageBooks.errors.title.required'),
  author: yup
    .string()
    .required('screen.manageBooks.errors.author.required'),
  description: yup
    .string()
    .required('screen.manageBooks.errors.description.required'),
  publicationDate: yup
    .string()
    .required('screen.manageBooks.errors.publicationDate.required'),
  publisher: yup
    .string()
    .required('screen.manageBooks.errors.publisher.required'),
  photo: yup
    .string()
    .required('screen.manageBooks.errors.photo.required'),
})
