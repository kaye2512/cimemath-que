import {LoginSocialGoogle} from "reactjs-social-login";
import {GoogleLoginButton} from "react-social-login-buttons";
import {useNavigate} from "react-router-dom";
import {ApiController} from "../../utils/server/apiController";


export const FormGoogle = ({type}) => {
    const navigate = useNavigate();
    return (
        <LoginSocialGoogle client_id="955538355623-dok0i9d3ndq8ruds7k3av7qgjurc5clj.apps.googleusercontent.com"
                           onReject={(err)=>console.log(err)}
                           onResolve={(res)=>{
                               console.log(res.data);
                               let username
                               const {
                                   family_name,
                                   given_name,
                                   email,
                                   sub
                               } = res.data;
                               if(!email){
                                   username = sub;
                               }else{
                                   username = email.split("@",1)[0];
                               }

                               const userValues = {
                                   firstname:given_name,
                                   lastname:family_name,
                                   email:"",
                                   username:username,
                                   provider:"google"
                               }
                                ApiController(type,userValues).then((res)=>{
                                    if(res){
                                        navigate("/home");
                                    }
                                })

                           }}>
            <GoogleLoginButton text="continuer avec google" />
        </LoginSocialGoogle>
    );

}
