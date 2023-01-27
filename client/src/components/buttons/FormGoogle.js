
import {LoginSocialGoogle} from "reactjs-social-login";
import {GoogleLoginButton} from "react-social-login-buttons";
import {useNavigate} from "react-router-dom";


export const FormGoogle = () => {
    const navigate = useNavigate();
    return (
        <LoginSocialGoogle client_id="955538355623-dok0i9d3ndq8ruds7k3av7qgjurc5clj.apps.googleusercontent.com"
                           onReject={(err)=>console.log(err)}
                           onResolve={(res)=>{
                               const {
                                   access_token,
                                   email,
                                   family_name,
                                   given_name,
                                   picture,
                               } = res.data;

                               const userValues = {
                                   token:access_token,
                                   first_name:given_name,
                                   last_name:family_name,
                                   email:email,
                                   username:email.split("@",1)[0],
                                   profile_image:picture,
                                   provider:"google"
                               }
                               console.log(userValues);
                               localStorage.setItem("token",access_token);
                               navigate("/home");

                           }}>
            <GoogleLoginButton text="continuer avec google" />
        </LoginSocialGoogle>
    );

}
