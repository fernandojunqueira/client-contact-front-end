import React, { useContext } from 'react'
import RegisterModal from '../../components/RegisterModal'
import TechList from '../../components/TechList'
import UpdateModal from '../../components/UpdateModal'
import { UserContext } from '../../context/UserContext'
import { ContainerDash,ButtonLinkRegister, StyledMain } from './style'


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
                <h2>Olá, {user?.name}</h2>
                <span>{user?.course_module
}</span>
                
            </header>
        </div>
        <StyledMain>
            <div className='tech'>
                <h2>Contatos</h2>
                <button type='button' onClick={() => setClose(true)}>+</button>
            </div>
            <TechList/>
        </StyledMain>
        { close ? (<RegisterModal/>) : (<p></p>) }
        { openUpdateModal ? (<UpdateModal />) : (<p></p>) }
        
    </ContainerDash>
    
  )
}

export default Dashboard