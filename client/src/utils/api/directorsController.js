import { api } from "../../services/constants/api/constants";

export const getDirectors =  ()=>{
    return  fetch(api+'/director').then((response)=>response.json())
}

export const addDirector = async(directorValues)=>{
   
  console.log(directorValues)
    let formData= new FormData();
    formData.append('firstname', directorValues.firstname)
    formData.append('lastname', directorValues.lastname)
    formData.append('description', directorValues.description)
    formData.append('file', directorValues.image)
    const requestOptions = {
        method: 'POST',
        body: formData
    }
    return await fetch(api+'/director', requestOptions);
}