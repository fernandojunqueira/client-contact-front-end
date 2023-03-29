import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { TechContext } from '../../context/ContactContext'
import { UserContext } from '../../context/UserContext'
import { schema } from '../../validations/registerNewContact'
import { StyledButton } from '../Button/styled'
import { StyledForm } from '../Form/style'
import { StyledInput } from '../Inputs/style'
import { StyledModal } from './styled'
import { iContacts } from '../../services/getProfiles'

const RegisterModal = () => {
    
    const { registerNewContact  } = useContext(TechContext)
    const { setClose } = useContext(UserContext)

    const { register, handleSubmit,formState:{ errors } } = useForm<iContacts>({
        resolver: yupResolver(schema),  
    });

  return (
        <StyledModal>
            <div className="overlay">
                <div className="content">
                    <header className='header__modal'>
                        <h2>Adicionar novo Contato</h2>
                        <button type='button' onClick={() => setClose(false)}>X</button>
                    </header>

                    <StyledForm className='form__modal' onSubmit={handleSubmit(registerNewContact)}>
                        <label htmlFor='email'>Nome</label>
                        <StyledInput 
                        type="text" 
                        id='firstName' 
                        placeholder='Digite aqui a tecnologia'
                        {...register("firstName")}
                        />
                        <p>{errors?.firstName?.message}</p>

                        <label htmlFor='email'>Sobrenome</label>
                        <StyledInput 
                        type="text" 
                        id='lastName' 
                        placeholder='Digite aqui a tecnologia'
                        {...register("lastName")}
                        />
                        <p>{errors?.lastName?.message}</p>

                        <label htmlFor='email'>Telefone</label>
                        <StyledInput 
                        type="text" 
                        id='phone' 
                        placeholder='Digite aqui a tecnologia'
                        {...register("phone")}
                        />
                        <p>{errors?.phone?.message}</p>

                        <label htmlFor='email'>email</label>
                        <StyledInput 
                        type="text" 
                        id='email' 
                        placeholder='Digite aqui a tecnologia'
                        {...register("email")}
                        />
                        <p>{errors?.email?.message}</p>
                                          
                        <StyledButton 
                        type='submit'
                        color={"#EDF2FF"} 
                        background={"#4C6EF5"}
                        >Adicionar Contato</StyledButton>

                    </StyledForm>
                </div>
            </div>

        </StyledModal>
  )
}

export default RegisterModal