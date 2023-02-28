import {LoginSocialFacebook} from "reactjs-social-login";
import {FacebookLoginButton} from "react-social-login-buttons";
import {useNavigate} from "react-router-dom";
import { authUser } from "../../utils/api/authController";

export const FormFacebook = ({type, setIsSubmit}) => {
    const navigate = useNavigate();
    return (
        <LoginSocialFacebook
            appId="1774459536258808"
            onResolve={(res)=>{
                console.log(res);
                const {
                    email,
                    first_name,
                    last_name,
                }=res.data;

                const userValues = {
                    firstname:first_name,
                    lastname:last_name,
                    password:"",
                    email:email,
                    username:email.split("@",1)[0],
                    provider:"facebook"
                }

                authUser(type,userValues).then((res)=>{
                    if(res){
                        navigate("/home");
                    }
                }).catch(()=>{
                    setIsSubmit(true)
                })

            }}
            onReject={(err)=>{
                console.log(err);
            }
            }
        >
            <FacebookLoginButton text="continuer avec facebook" className="w-50 rounded-lg"/>
        </LoginSocialFacebook>
    );

}

