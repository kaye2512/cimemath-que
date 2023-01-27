import {TwitterLoginButton} from "react-social-login-buttons";
import {LoginSocialTwitter} from "reactjs-social-login";
import {useNavigate} from "react-router-dom";
import {postToDb} from "../../services/constants/registration/Api";

export const FormTwitter = (props) => {
    const navigate = useNavigate();
    return (
        <LoginSocialTwitter client_id="LUZqanB0cFpEMnF6MU9sSUs3clU6MTpjaQ"
                            redirect_uri="http://localhost:3000/login"
                            onReject={(err)=>console.log(err)}
                            onResolve={({ provider, data })=>
                            {
                                const {
                                    name,
                                    profile_image_url,
                                    username,
                                } = data;

                                const userValues = {
                                    firstname:"",
                                    lastname:name,
                                    email:"",
                                    username:username,
                                    provider:"twitter"
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

            <TwitterLoginButton text="continuer avec twitter" className="w-30 rounded-lg"/>
        </LoginSocialTwitter>
    );

}