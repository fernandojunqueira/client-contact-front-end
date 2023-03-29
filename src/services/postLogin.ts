import api from "./api";

export interface iData{
    id: string;
    token: string;
  }

export interface iLoginBody{
    email: string;
    password: string;
  }

export async function postLogin(body:iLoginBody):Promise<iData>{

    const {data} = await api.post<iData>('/login',body)

    return data

}