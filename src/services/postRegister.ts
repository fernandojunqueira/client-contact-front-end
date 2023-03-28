import api from "./api";

export interface iRegisterBody{
  
    email: string ; 
    password: string ; 
    firstName: string ; 
    lastName: string ; 
    phone: string ; 
    
  }

export async function postRegister(body:iRegisterBody): Promise<void>{

    await api.post('users',body)
}