
import {LoginSocialGoogle} from "reactjs-social-login";
import {GoogleLoginButton} from "react-social-login-buttons";
import {useNavigate} from "react-router-dom";
import {postToDb} from "../../services/constants/registration/Api";


export const FormGoogle = () => {
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
                               console.log(userValues);

                               postToDb(userValues).then((response)=>{
                                   if(response){
                                       response.json().then((response)=>{
                                           localStorage.setItem("token",response.token)
                                       })
                                       navigate("/home");
                                   }
                               });

                           }}>
            <GoogleLoginButton text="continuer avec google" />
        </LoginSocialGoogle>
    );

}
