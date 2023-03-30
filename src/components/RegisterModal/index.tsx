import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ContactContext } from '../../context/ContactContext'
import { UserContext } from '../../context/UserContext'
import { schema } from '../../validations/registerNewContact'
import { StyledButton } from '../Button/styled'
import { StyledForm } from '../Form/style'
import { StyledInput } from '../Inputs/style'
import { StyledModal } from './styled'
import { iContacts } from '../../services/getProfiles'

const RegisterModal = () => {
    
    const { registerNewContact  } = useContext(ContactContext)
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
                        placeholder='Digite aqui o nome do contato'
                        {...register("firstName")}
                        />
                        <h6>{errors?.firstName?.message}</h6>

                        <label htmlFor='email'>Sobrenome</label>
                        <StyledInput 
                        type="text" 
                        id='lastName' 
                        placeholder='Digite aqui o Sobrenome do contato'
                        {...register("lastName")}
                        />
                        <h6>{errors?.lastName?.message}</h6>

                        <label htmlFor='email'>Telefone</label>
                        <StyledInput 
                        type="text" 
                        id='phone' 
                        placeholder='(99)99999-9999'
                        {...register("phone")}
                        />
                        <h6>{errors?.phone?.message}</h6>

                        <label htmlFor='email'>email</label>
                        <StyledInput 
                        type="text" 
                        id='email' 
                        placeholder='Digite aqui o email do contato'
                        {...register("email")}
                        />
                        <h6>{errors?.email?.message}</h6>
                                          
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