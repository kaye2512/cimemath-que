import { api } from "../../services/constants/api/constants";

export const getUsers =  ()=>{
    return fetch(api+'/users').then((response)=>response.json())
}