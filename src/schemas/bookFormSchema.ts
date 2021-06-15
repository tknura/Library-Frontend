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
    .date(),
  publisher: yup
    .string(),
  photo: yup
    .string(),
})
