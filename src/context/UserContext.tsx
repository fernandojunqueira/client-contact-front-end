import { createContext,  ReactNode,  useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProfile, iContacts, iProfile } from "../services/getProfiles";
import { iLoginBody, postLogin } from "../services/postLogin";
import { iRegisterBody, postRegister } from "../services/postRegister";

interface iUserContextProps{
  children: ReactNode;
}

interface iOpenModal{
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  id: string;
}

interface iUserContext{
  user:iProfile | null;
  setUser:React.Dispatch<React.SetStateAction<iProfile | null>>;
  loading:boolean;
  setLoading:React.Dispatch<React.SetStateAction<boolean>>;
  loadingPage:boolean;
  setLoadingPage?:React.Dispatch<React.SetStateAction<boolean>>;
  contacts:iContacts[] | null;
  setContacts?:React.Dispatch<React.SetStateAction<iContacts[] | null>>;
  close:boolean;
  setClose:React.Dispatch<React.SetStateAction<boolean>>;
  del:string | null;
  setDel:React.Dispatch<React.SetStateAction<string | null>>;
  openUpdateModal:iOpenModal | null;
  setOpenUpdateModal:React.Dispatch<React.SetStateAction<iOpenModal | null>>;

  loginUser: (body:iLoginBody) => void;
  registerUser: (body:iRegisterBody) => void;
  logOut: () => void;

}

export const UserContext = createContext<iUserContext>({} as iUserContext)


function ClientProvider({children}:iUserContextProps){  

    const [user, setUser] = useState<iProfile | null>(null)
    const [loading, setLoading] = useState(false)
    const [loadingPage, setLoadingPage] = useState(true)
    const [contacts, setContacts] = useState<iContacts[] | null>(null)
    const [close, setClose] = useState(false)
    const [del, setDel] = useState<string | null>(null)
    const [openUpdateModal,setOpenUpdateModal] = useState<iOpenModal | null>(null)
    const location = useLocation()

    const navigate = useNavigate()

    useEffect(() => {
  
      async function loadUser(){
        const token = localStorage.getItem('@clientToken')
        const clientId = localStorage.getItem('@clientId')
        
        if(token) {
          try {
            
           const data = await getProfile(token,clientId)

            setUser(data)
            setContacts(data.contacts)
            
          } catch (error) {
            console.error(error)
          }

        }
        setLoadingPage(false)

      }
      loadUser()
      
      }
    , [close,del,openUpdateModal])

    const loginUser = async (body:iLoginBody):Promise<void> => {
        try {
      
          setLoading(true)

          const {token, id} = await postLogin(body)

          localStorage.setItem('@clientToken',token)
          localStorage.setItem('@clientId', id)

          const client = await getProfile(token,id)

          setUser(client)
          setContacts(client.contacts)
      
          toast.success("Login realizado com sucesso!", {
            theme: "dark"
          })

          const toNavigate:string = location.state?.from?.pathname ||  'dashboard'

          navigate(toNavigate ,{replace:true})
      
        } catch ({response}:any) {
          
        toast.error(`Email ou senha incorreta`, {
          theme: "dark"
        })
      
        } finally{
          setLoading(false)
        }
      }

    const  registerUser = async (body:iRegisterBody) => {
      try {
          setLoading(true)
          await postRegister(body)

          toast.success("Conta criada com sucesso!", {
              theme: "dark"
            })
            
          navigate('/')
            
    } catch (error) {

          toast.error(`Email já cadastrado`, {
              theme: "dark"
            })

   } finally{
          setLoading(false)
   }
      }

    const logOut = () =>{
        localStorage.removeItem('@clientToken')
        localStorage.removeItem('@clientId')
    }



    return(
        <UserContext.Provider value={ 
          { 
            user,
            setUser,
            loading,
            setLoading,
            loginUser,
            registerUser,
            loadingPage,
            contacts,
            logOut, 
            close, 
            setClose, 
            del, 
            setDel ,
            openUpdateModal,
            setOpenUpdateModal,
            } }>
            {children}
        </UserContext.Provider>
    )
}

export default ClientProvider