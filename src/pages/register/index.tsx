import React, { useContext } from 'react'
import { StyledForm } from '../../components/Form/style'
import { StyledInput } from '../../components/Inputs/style'
import { StyledButton } from '../../components/Button/styled'
import { Container, StyledLinkVoltar } from './style'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "../../validations/registerUser";

import { UserContext } from '../../context/UserContext'

interface iRegister{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

const RegisterPage = () => {
    const { loading, registerUser } = useContext(UserContext)

    const { register, handleSubmit,formState:{ errors } } = useForm<iRegister>({
        resolver: yupResolver(schema),  
    });

  return (
    <main>
    <Container>
        <div>
            <h1>Cliente</h1>
            <StyledLinkVoltar to={'/'} >Voltar</StyledLinkVoltar>
        </div>
        <StyledForm onSubmit={handleSubmit(registerUser)}>
            <h2>Crie sua conta</h2>
            <span>Rapido e grátis, vamos nessa</span>

            <label htmlFor='name' >Nome</label>
            <StyledInput type="text" id='firstName' placeholder='Digite aqui seu nome' {...register("firstName")}/>
            <h6>{errors.firstName?.message}</h6>

            <label htmlFor='name' >Sobrenome</label>
            <StyledInput type="text" id='lastName' placeholder='Digite aqui seu Sobrenome' {...register("lastName")}/>
            <h6>{errors.lastName?.message}</h6>

            <label htmlFor='email'>Email</label>
            <StyledInput type="text" id='email' placeholder='Digite aqui seu email' {...register("email")}/>
            <h6>{errors.email?.message}</h6>

            <label htmlFor='bio' >Telefone</label>
            <StyledInput type="text" id='phone' placeholder='Digite aqui seu telefone' {...register("phone")}/>
            <h6>{errors.phone?.message}</h6>

            <label htmlFor='password'>Senha</label>
            <StyledInput type="password" id='password' placeholder='Digite aqui seu senha' {...register("password")}/>
            <h6>{errors.password?.message}</h6>

            <label htmlFor='confirm-password' >Confirmar Senha</label>
            <StyledInput type="password" id='confirm-password' placeholder='Digite novamente sua senha' {...register("confirmPassword")}/>
            <h6>{errors.confirmPassword?.message}</h6>

            <StyledButton type='submit' color={"#EDF2FF"} background={"#4C6EF5"} disabled={loading}>{loading ? 'Cadastrando...': 'Cadastre-se'}</StyledButton>
        </StyledForm>
    </Container>
</main>
  )
}

export default RegisterPage