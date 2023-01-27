import {TwitterLoginButton} from "react-social-login-buttons";
import {LoginSocialTwitter} from "reactjs-social-login";
import {useNavigate} from "react-router-dom";

export const FormTwitter = (props) => {
    const navigate = useNavigate();
    return (
        <LoginSocialTwitter client_id="LUZqanB0cFpEMnF6MU9sSUs3clU6MTpjaQ"
                            redirect_uri="http://localhost:3000/login"
                            onReject={(err)=>console.log(err)}
                            onResolve={({ provider, data })=>
                            {
                                const {
                                    access_token,
                                    name,
                                    profile_image_url,
                                    username,
                                } = data;

                                const userValues = {
                                    token:access_token,
                                    first_name:"",
                                    last_name:name,
                                    email:"",
                                    username:username,
                                    profile_image:profile_image_url,
                                    provider:"twitter"
                                }
                                console.log(userValues);
                                localStorage.setItem("token",access_token);
                                navigate("/home");

                            }}>

            <TwitterLoginButton text="continuer avec twitter" className="w-30 rounded-lg"/>
        </LoginSocialTwitter>
    );

}