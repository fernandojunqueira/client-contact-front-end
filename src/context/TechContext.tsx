import { createContext, ReactNode, useContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../services/api";
import { UserContext } from "./UserContext";
import { iContacts } from "../services/getProfiles";
import { iUpdateContact } from "../components/UpdateModal";

interface iTechContextProps{
  children: ReactNode;
}

interface iContactContext{
  registerNewContact: (body:iContacts) => void;
  updateContact: (body:iUpdateContact) => void;
  deleteTech: () => void;
}

export const TechContext = createContext({} as iContactContext)

function TechProvider({children}:iTechContextProps){

    const { setClose, setDel , openUpdateModal , setOpenUpdateModal } = useContext(UserContext)

    const registerNewContact = async (body:iContacts) => {
        try {
          const clientId = localStorage.getItem("@clientId")
      
          await api.post(`/contact/${clientId}`,body)
        
          toast.success("Nova tecnologia cadastrada", {
            theme: "dark"
          })
          
          setClose(false)

        } catch (error) {
            toast.error(`Essa contato já foi adicionado.`, {
                theme: "dark"
              })
        }   
    }

    const updateContact =  async (body:iUpdateContact) => {
    
      try {

        await api.patch(`/contact/${openUpdateModal?.id}`,body)

        toast.success("Contato atualizado", {
          theme: "dark"
        })

        setOpenUpdateModal(null)

      } catch (error) {
        console.error(error)
      }
    }

    const deleteTech = async () => {
    
        try {
           await api.delete(`users/techs/${openUpdateModal?.id}`)

            setDel('Deleted')
            setOpenUpdateModal(null)

        } catch (error) {
            console.error(error)
        }
    }

    return(
        <TechContext.Provider value={{ registerNewContact  , deleteTech, updateContact  }}>
            {children}
        </TechContext.Provider>
    )
}

export default TechProvider