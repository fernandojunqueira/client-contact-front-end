import api from "./api"

export interface iProfile{
  
  id: string; 
  firstName: string;
  lastName:string;
  phone: string;
  email: string;
  registrationDate: Date;
  contacts: iContacts[]
}

export interface iContacts{
  registrationDate:Date
	email:string
	phone:string
	lastName:string
	firstName:string
	id:string
}

export async function getProfile(token:string, clientId:string | null): Promise<iProfile> {
    api.defaults.headers.common.authorization = `Bearer ${token}`
  
    const {data} = await api.get<iProfile>(`/client/${clientId}`)

    return data
}