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
                               const {
                                   email,
                                   family_name,
                                   given_name,
                                   picture,
                               } = res.data;

                               const userValues = {
                                   firstname:given_name,
                                   lastname:family_name,
                                   email:email,
                                   username:email.split("@",1)[0],
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
