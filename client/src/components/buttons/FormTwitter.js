//import react
import React from 'react';

//import les icones
import {TwitterLoginButton} from "react-social-login-buttons";
import {LoginSocialTwitter} from "reactjs-social-login";


//apple btn
// fucntion that return apple icon
export const FormTwitter = (props) => {
    return (
        <LoginSocialTwitter client_id="LUZqanB0cFpEMnF6MU9sSUs3clU6MTpjaQ"
                            redirect_uri="http://localhost:3000/login"
                            onReject={(err)=>console.log(err)}
                            onResolve={({ provider, data })=>
                            {console.log(data);}}>

            <TwitterLoginButton text="continuer avec twitter" className="w-30 rounded-lg"/>
        </LoginSocialTwitter>
    );

}
export default FormTwitter;