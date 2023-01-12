//import components
import {TextFieldLarge} from "../../components/forms/TextField/TextFieldLarge";
import React from "react";
import {LoginSocialFacebook} from "reactjs-social-login";
import {LoginSocialGoogle} from "reactjs-social-login";
import {LoginSocialTwitter} from "reactjs-social-login";
import {FacebookLoginButton,GoogleLoginButton,TwitterLoginButton} from "react-social-login-buttons";
import {FormConnexion} from "../../components/buttons/FormConnexion";
import Footer from "../../components/Footer/Footer";
import {Link} from "react-router-dom";
//import footer

import Footer from "../../components/footer/Footer";

function Login() {

    return (
        <div className="mx-5 py-12 my-0 flex flex-col items-center">
            <section className="py-6 px-20">
                {/* document title */}
                <h1 className="text-5xl mb-8 font-extrabold ">
                    Connexion
                </h1>

                {/* Connexion form*/}
                <form>
                    <div className="flex flex-col max-w-xl ">

                        {/* first name and last name section*/}
                        <TextFieldLarge label={"Identifiant"} placeholder={"Entrer votre identifiant"}/>
                        <TextFieldLarge label={"Mot de passe"} placeholder={"Entrer votre mot de passe"} type="password"/>
                        <FormConnexion/>
                        <p className="mt-7">

                            Vous n'avez pas de compte ? <Link to="/register" className="text-red-600 hover:underline">Inscrivez-Vous</Link>
                        </p><br/>
                        <p> Ou bien connectez-vous avec : </p>

                        {/* Socials authentification*/}
                        <div className="flex flex-col space-y-3 m-3">

                            {/*<FormGoogle/>*/}

                            <LoginSocialGoogle client_id="955538355623-dok0i9d3ndq8ruds7k3av7qgjurc5clj.apps.googleusercontent.com"
                                               onReject={(err)=>console.log(err)}
                                               onResolve={(res)=>console.log(res)}>
                                <GoogleLoginButton text="connecter vous avec google" />
                            </LoginSocialGoogle>

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
                               <FacebookLoginButton text="connecter vous avec facebook" className="w-50"/>
                           </LoginSocialFacebook>

                            <LoginSocialTwitter client_id="LUZqanB0cFpEMnF6MU9sSUs3clU6MTpjaQ"
                                                redirect_uri="http://localhost:3000/login"
                                                onReject={(err)=>console.log(err)}
                                                onResolve={({ provider, data })=>
                                                {console.log(data);}}

                            >

                                <TwitterLoginButton text="connecter vous avec twitter" className="w-50"/>
                            </LoginSocialTwitter>



                        </div>

                    </div>

                </form>

            </section> <br/><br/>
            {/*footer*/}
            <footer>
                <Footer/>
            </footer>
        </div>


    );
}


export default Login