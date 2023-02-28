
import { api } from "../../services/constants/api/constants";

export const getFilms =  ()=>{
    return  fetch(api+'/films').then((response)=>response.json())
}

export const addfilm = async(filmValues)=>{
   
        console.log(filmValues)
        let formData= new FormData();
        formData.append('title', filmValues.title)
        formData.append('description', filmValues.description)
        formData.append('pubDate', filmValues.pubDate)
        formData.append('file', filmValues.image)
        const requestOptions = {
                method: 'POST',
                body: formData
        }
        return await fetch(api+'/films', requestOptions);
}