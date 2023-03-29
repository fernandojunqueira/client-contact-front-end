import React, { useContext } from 'react'
import RegisterModal from '../../components/RegisterModal'
import UpdateModal from '../../components/UpdateModal'
import { UserContext } from '../../context/UserContext'
import { ContainerDash,ButtonLinkRegister, StyledMain } from './style'
import ContactList from '../../components/ContactList'


const Dashboard = () => {
    const { logOut , openUpdateModal ,close , setClose } = useContext(UserContext)

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
                <h2>Welcome </h2>
                <span>Texto de welcome</span>
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