import {LoginSocialFacebook} from "reactjs-social-login";
import {FacebookLoginButton} from "react-social-login-buttons";
import {useNavigate} from "react-router-dom";

export const FormFacebook = () => {
    const navigate = useNavigate();
    return (
        <LoginSocialFacebook
            appId="1774459536258808"
            onResolve={(res)=>{
                console.log(res);
                const {
                    accessToken,
                    email,
                    first_name,
                    last_name,
                }=res.data;

                const userValues = {
                    token:accessToken,
                    first_name:first_name,
                    last_name:last_name,
                    email:email,
                    username:email.split("@",1)[0],
                    profile_image:res.data.picture.data.url,
                    provider:"facebook"
                }
                console.log(userValues);
                localStorage.setItem("token",accessToken);
                navigate("/home");
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

