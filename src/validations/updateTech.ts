import * as yup from "yup";

export const schema = yup.object({
  firstName: yup.string().notRequired(),
  lastName: yup.string().notRequired(),
  phone: yup.string().notRequired(),
  email: yup.string().notRequired(),
  })