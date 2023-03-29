import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { StyledCard, StyledList } from './style'
import { iContacts } from '../../services/getProfiles';

const ContactList = () => {

    const {  contacts , setOpenUpdateModal  } = useContext(UserContext)

  return (
    <StyledList>
    {contacts?.map((contact:iContacts,index:number) => 
        <StyledCard key={index} onClick={() => setOpenUpdateModal({
          firstName:contact.firstName,
          lastName:contact.lastName,
          phone:contact.phone,
          email:contact.email,
          id: contact.id
          })}>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <div>
                <p>{contact.email}</p>
            </div>
        </StyledCard>
    )}
    </StyledList>
  )
}

export default ContactList