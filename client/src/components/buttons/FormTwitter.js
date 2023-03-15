import {TwitterLoginButton} from "react-social-login-buttons";
import {LoginSocialTwitter} from "reactjs-social-login";
import {useNavigate} from "react-router-dom";
import { authUser } from "../../utils/api/authController";

export const FormTwitter = ({type, setIsSubmit}) => {
    const navigate = useNavigate();
    return (
        <LoginSocialTwitter client_id="LUZqanB0cFpEMnF6MU9sSUs3clU6MTpjaQ"
                            redirect_uri="http://localhost:3000/login"
                            onReject={(err)=>console.log(err)}
                            onResolve={({ provider, data })=>
                            {
                                const {
                                    name,
                                    username,
                                } = data;

                                const userValues = {
                                    firstname:"",
                                    lastname:name,
                                    email:"",
                                    password:"",
                                    username:username,
                                    provider:"twitter"
                                }
                                authUser(type,userValues).then((res)=>{
                                    if(res){
                                        navigate("/home");
                                    }
                                }).catch(()=>{
                                    setIsSubmit(true)
                                })

                            }}>

            <TwitterLoginButton text="continuer avec twitter" className="w-30 rounded-lg"/>
        </LoginSocialTwitter>
    );

}