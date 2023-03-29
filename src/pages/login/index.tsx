import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

import { StyledDivContainerForm, StyledLink } from './style'
import { StyledForm } from '../../components/Form/style'
import { StyledInput } from '../../components/Inputs/style'
import { StyledButton } from '../../components/Button/styled'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../validations/loginUser'

interface iLogin{
  email: string;
  password:string;
}

const LoginPage = () => {

  const { loading , loginUser } = useContext(UserContext)

  const { register, handleSubmit,formState:{ errors } } = useForm<iLogin>({
    resolver: yupResolver(schema),  
});


  return (
    <main>
        <StyledDivContainerForm>
            <h1>Cliente Contatos</h1>
            <StyledForm onSubmit={handleSubmit(loginUser)}>
                <h2>Login</h2>

                <label htmlFor='email'>Email</label>
                <StyledInput type="text" id='email' placeholder='Digite aqui seu email' {...register("email")}/>
                <h6>{errors.email?.message}</h6>

                <label htmlFor='password' >Senha</label>
                <StyledInput type="password" id='password' placeholder='Digite aqui sua senha' {...register("password")}/>
                <h6>{errors.password?.message}</h6>
                  
                <StyledButton 
                type='submit'
                color={"#EDF2FF"} 
                background={"#4C6EF5"}
                disabled={loading}
                >Entrar</StyledButton>

                <span>Ainda não possui uma conta?</span>
                         
                <StyledLink to={'/register'}  color={"#CED4DA"} background={"#343A40"}>Cadastre-se</StyledLink>
                

            </StyledForm>
        </StyledDivContainerForm>
    </main>
  )
}

export default LoginPage