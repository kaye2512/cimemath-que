import { api } from "../../services/constants/api/constants";

export const getActors =  ()=>{
    return  fetch(api+'/acteur').then((response)=>response.json())
}

export const addActor = async(actorValues)=>{
    console.log(actorValues)
    let formData= new FormData();
    formData.append('firstname', actorValues.firstname)
    formData.append('lastname', actorValues.lastname)
    formData.append('birthdate', actorValues.birthdate)
    formData.append('description', actorValues.description)
    formData.append('file', actorValues.image)
    const requestOptions = {
        method: 'POST',
        body: formData
    }
    return await fetch(api+'/acteur', requestOptions);
}