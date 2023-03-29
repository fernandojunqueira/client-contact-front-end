import { yupResolver } from '@hookform/resolvers/yup'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { TechContext } from '../../context/TechContext'
import { UserContext } from '../../context/UserContext'
import { schema } from '../../validations/updateTech'
import { StyledButton } from '../Button/styled'
import { StyledForm } from '../Form/style'
import { StyledInput } from '../Inputs/style'
import { StyledModal } from '../RegisterModal/styled'
import { StyledDiv } from './style'


export interface iUpdateContact{
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
  }

const UpdateModal    = () => {
    
    const { updateTech , deleteTech } = useContext(TechContext)
    const {  setOpenUpdateModal , openUpdateModal } = useContext(UserContext)

    const { register, handleSubmit } = useForm<iUpdateContact>({
        resolver: yupResolver(schema),  
    });

  return (
        <StyledModal>
            <div className="overlay">
                <div className="content">
                    <header className='header__modal'>
                        <h2>Cadastrar Tecnologia</h2>
                        <button type='button' onClick={() => setOpenUpdateModal(null)}>X</button>
                    </header>

                    <StyledForm className='form__modal' onSubmit={handleSubmit(updateTech)}>

                        <label htmlFor='firstName'>Nome</label>
                        <StyledInput 
                        type="text" 
                        id='firstName' 
                        placeholder='Digite aqui a tecnologia'
                        {...register("firstName")}         
                        />

                        <label htmlFor='email'>Sobrenome</label>
                        <StyledInput 
                        type="text" 
                        id='email' 
                        placeholder='Digite aqui a tecnologia'
                        {...register("lastName")}         
                        />

                        <label htmlFor='phone'>Telefone</label>
                        <StyledInput 
                        type="text" 
                        id='phone' 
                        placeholder='Digite aqui a tecnologia'
                        {...register("phone")}         
                        />

                        <label htmlFor='email'>Email</label>
                        <StyledInput 
                        type="text" 
                        id='email' 
                        placeholder='Digite aqui a tecnologia'
                        {...register("email")} 
                        />
                        
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