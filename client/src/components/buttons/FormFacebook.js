//import react
import React from 'react';

//import les icones
import {LoginSocialFacebook} from "reactjs-social-login";
import {FacebookLoginButton} from "react-social-login-buttons";


//fucntion that return facebook icon
export const FormFacebook = () => {
    return (
        <LoginSocialFacebook
            appId="1774459536258808"
            onResolve={(res)=>{
                console.log(res);
            }
            }
            onReject={(err)=>{
                console.log(err);
            }
            }
        >
            <FacebookLoginButton text="continuer avec facebook" className="w-50 rounded-lg"/>
        </LoginSocialFacebook>
    );

}
export default FormFacebook;

