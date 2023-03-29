import * as yup from "yup";

export const schema = yup.object({
  firstName: yup.string().required('Nome é obrigatório'),
  lastName: yup.string().required('Sobrenome é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório'),
  email: yup.string().email().required('Email é obrigatório'),
  })