import ContactProvider from "./ContactContext";
import ClientProvider from "./UserContext";

import  { ReactNode } from 'react'

interface iProvider{
  children: ReactNode;
}

const Provider = ({children}:iProvider) => {
  return (
    <ClientProvider>
        <ContactProvider>
            {children}
        </ContactProvider>
    </ClientProvider>
  )
}

export default Provider