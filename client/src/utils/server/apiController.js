import { SecurityApi} from "./Api";

export const ApiController = async (type,userValues)=>{
    const res = await SecurityApi(type,userValues).then((response)=>{
        if(response){
            response.json().then((response)=>{
                localStorage.setItem("token",response.token);
            })
            return response;
        }
    });
    if(res){
        return res;
    }

}