//import react
import React from 'react';

//import les icones
import {LoginSocialGoogle} from "reactjs-social-login";
import {GoogleLoginButton} from "react-social-login-buttons";


//Google btn
//function that return Google icon
export const FormGoogle = () => {
    return (
        <LoginSocialGoogle client_id="955538355623-dok0i9d3ndq8ruds7k3av7qgjurc5clj.apps.googleusercontent.com"
                           onReject={(err)=>console.log(err)}
                           onResolve={(res)=>console.log(res)}>
            <GoogleLoginButton text="continuer avec google" />
        </LoginSocialGoogle>
    );

}
export  default FormGoogle;