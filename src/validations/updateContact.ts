import * as yup from "yup";

export const schema = yup.object({
  firstName: yup.string().required("Não é possível deixar vazio"),
  lastName: yup.string().required("Não é possível deixar vazio"),
  phone: yup.string().required("Não é possível deixar vazio"),
  email: yup.string().email().required("Coloque um email válido"),
  })