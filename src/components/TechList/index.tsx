import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { StyledCard, StyledList } from './style'

interface iTechs{
    id: string ; 
    title: string ; 
    status: string ; 
    created_at: string ; 
    updated_at: string ; 
  }

const TechList = () => {

    const {  techs , setOpenUpdateModal  } = useContext(UserContext)

  return (
    <StyledList>
    {techs?.map((tech:iTechs,index:number) => 
        <StyledCard key={index} onClick={() => setOpenUpdateModal({title: tech.title,id: tech.id})}>
            <h2>{tech.title}</h2>
            <div>
                <p>{tech.status}</p>
            </div>
        </StyledCard>
    )}
    </StyledList>
  )
}

export default TechList