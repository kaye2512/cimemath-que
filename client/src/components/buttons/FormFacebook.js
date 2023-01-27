import {LoginSocialFacebook} from "reactjs-social-login";
import {FacebookLoginButton} from "react-social-login-buttons";
import {useNavigate} from "react-router-dom";
import {postToDb} from "../../services/constants/registration/Api";

export const FormFacebook = () => {
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
                    email:email,
                    username:email.split("@",1)[0],
                    provider:"facebook"
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

