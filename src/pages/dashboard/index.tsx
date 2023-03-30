import React, { useContext } from 'react'
import RegisterModal from '../../components/RegisterModal'
import UpdateModal from '../../components/UpdateModal'
import { UserContext } from '../../context/UserContext'
import { ContainerDash,ButtonLinkRegister, StyledMain, ButtonCreatePDF } from './style'
import ContactList from '../../components/ContactList'
import { clientPDF } from '../../components/Reports/Client'
import { FaRegFilePdf } from "react-icons/fa";


const Dashboard = () => {
    const { user, logOut , openUpdateModal ,close , setClose } = useContext(UserContext)

  return (
        
        <ContainerDash>
        <div className="container">
            <nav>         
                    <h1>Cliente</h1>
                    <ButtonLinkRegister onClick={logOut} to={'/'}>Sair</ButtonLinkRegister>
            </nav>
        </div>
        <div className='container'>
            <header>
                <h2>Bem vindo {user?.firstName}, </h2>
                <ButtonCreatePDF type='button' onClick={() => clientPDF(user)}><FaRegFilePdf/>Gerar PDF</ButtonCreatePDF>
            </header>
        </div>
        <StyledMain>
            <div className='contact'>
                <h2>Contatos</h2>
                <button type='button' onClick={() => setClose(true)}>+</button>
            </div>
            <ContactList/>
        </StyledMain>
        { close ? (<RegisterModal/>) : (<p></p>) }
        { openUpdateModal ? (<UpdateModal />) : (<p></p>) }
        
    </ContainerDash>
    
  )
}

export default Dashboard