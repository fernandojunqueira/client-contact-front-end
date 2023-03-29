import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { TechContext } from '../../context/TechContext'
import { UserContext } from '../../context/UserContext'
import { schema } from '../../validations/updateContact'
import { StyledButton } from '../Button/styled'
import { StyledForm } from '../Form/style'
import { StyledInput } from '../Inputs/style'
import { StyledModal } from '../RegisterModal/styled'
import { StyledDiv } from './style'


export interface iUpdateContact{
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  }

const UpdateModal    = () => {
    
    const { updateContact , deleteTech } = useContext(TechContext)
    const {  setOpenUpdateModal , openUpdateModal } = useContext(UserContext)

    const { register, handleSubmit, formState: {errors} } = useForm<iUpdateContact>({
        resolver: yupResolver(schema),  
    });

  return (
        <StyledModal>
            <div className="overlay">
                <div className="content">
                    <header className='header__modal'>
                        <h2>Atualizar Contato</h2>
                        <button type='button' onClick={() => setOpenUpdateModal(null)}>X</button>
                    </header>

                    <StyledForm className='form__modal' onSubmit={handleSubmit(updateContact)}>

                        <label htmlFor='firstName'>Nome</label>
                        <StyledInput 
                        type="text" 
                        id='firstName' 
                        placeholder='Digite aqui a tecnologia'
                        defaultValue={openUpdateModal?.firstName}
                        {...register("firstName")}     
                        />
                        <span>{errors?.firstName?.message}</span>

                        <label htmlFor='lastName'>Sobrenome</label>
                        <StyledInput 
                        type="text" 
                        id='lastName' 
                        placeholder='Digite aqui a tecnologia'
                        defaultValue={openUpdateModal?.lastName}
                        {...register("lastName")}         
                        />
                        <span>{errors?.lastName?.message}</span>

                        <label htmlFor='phone'>Telefone</label>
                        <StyledInput 
                        type="text" 
                        id='phone' 
                        placeholder='Digite aqui a tecnologia'
                        defaultValue={openUpdateModal?.phone}
                        {...register("phone")}         
                        />
                        <span>{errors?.phone?.message}</span>

                        <label htmlFor='email'>Email</label>
                        <StyledInput 
                        type="text" 
                        id='email' 
                        placeholder='Digite aqui a tecnologia'
                        defaultValue={openUpdateModal?.email}
                        {...register("email")} 
                        />
                        <span>{errors?.email?.message}</span>
                        
                        <StyledDiv>
                            <StyledButton 
                            type='submit'
                            color={"#EDF2FF"} 
                            background={"#4C6EF5"}
                            padding={'0 29px'}
                            >Salvar Alterações</StyledButton>

                            <StyledButton 
                            onClick={() => deleteTech() }
                            color={"#ffffff"} 
                            background={"#868E96"}
                            padding={'0 22px'}
                            >Excluir</StyledButton>
                        </StyledDiv>
                        

                    </StyledForm>
                </div>
            </div>

        </StyledModal>
  )
}

export default UpdateModal  