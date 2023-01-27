<<<<<<< HEAD
//import components
import{TextFieldLarge} from "../../components/forms/TextField/TextFieldLarge";

//import social icons
import {LoginSocialFacebook} from "reactjs-social-login";
import {LoginSocialGoogle} from "reactjs-social-login";
import {LoginSocialTwitter} from "reactjs-social-login";
// import social icons btn
import {FormGoogle} from "../../components/buttons/FormGoogle";
import {FormTwitter} from "../../components/buttons/FormTwitter";
import {FormFacebook} from "../../components/buttons/FormFacebook";

// import submit btn
import {FormSubmit} from "../../components/buttons/FormSubmit";
import {initialValues, validate} from "../../services/constants/Connexion/Constants"
import {useState, useEffect} from "react";
// import route
import {Link} from "react-router-dom";
//import footer
import Footer from "../../components/footer/Footer";



=======
import{TextFieldLarge} from "../../components/forms/TextField/TextFieldLarge";
import {FormGoogle} from "../../components/buttons/FormGoogle";
import {FormTwitter} from "../../components/buttons/FormTwitter";
import {FormFacebook} from "../../components/buttons/FormFacebook";
import {Button} from "../../components/buttons/Button";
import {initialValues, validate} from "../../services/constants/Connexion/Constants"
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import {Authenticate} from "../../services/constants/registration/Api";
import {useNavigate} from "react-router-dom";
>>>>>>> 5038c944ac61fbcf71986d8df1a8779706a34ec0

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */


function Login() {
    //Declaration
<<<<<<< HEAD
=======
    const navigate = useNavigate();
>>>>>>> 5038c944ac61fbcf71986d8df1a8779706a34ec0
    const [userValues, setUserValues] = useState(initialValues);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e)=>{
        const {name, value} = e.target
        setUserValues({...userValues,[name]:value});
    }

    const submitHandler =(e)=>{
        e.preventDefault();
        if(Object.keys(formError).length === 0){
<<<<<<< HEAD

            console.log("form submitted");
=======
           Authenticate(userValues).then((response)=>{
               if(response){
                   response.json().then((response)=>{
                       localStorage.setItem("token",response.token)
                   })
                   navigate("/home");
               }
            });


>>>>>>> 5038c944ac61fbcf71986d8df1a8779706a34ec0
        }else{
            setIsSubmit(true);
            console.log("form have errors");
        }
    }

    useEffect(()=>{
        setFormError(validate(userValues));
    },[userValues])





    return (
        <div className="mx-5 py-12 my-0 flex flex-col items-center">
            <section className="py-6 px-20">
                {/* document title */}
                <h1 className="text-3xl mb-2 ml-8 font-extrabold ">
                    Connectez-vous
                </h1>

                {isSubmit &&

                    <div
                        className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-bold"
                        role="alert">
                        <span className="font-medium">L'identifiant ou le mot de passe ne sont pas valide</span>
                    </div>

                }
                {/* Login form*/}
                <form onSubmit={submitHandler}>
                    <div className="flex flex-col max-w-sm">

                        {/* username and password section*/}
                        <TextFieldLarge label="Identifiant"
                                        type="text"
                                        placeholder="Entrer votre identifiant"
                                        name={"username"}
                                        values={userValues.username}
                                        formError={formError.username}
                                        handleChange={handleChange}


                        />
                        <TextFieldLarge label="Mot de passe"
                                        type="password"
                                        placeholder="Entrer votre mot de passe"
                                        name="password"
                                        formError={formError.password}
                                        values={userValues.password}
                                        handleChange={handleChange}

                        />

                        {/* change button text name*/}
<<<<<<< HEAD
                        <FormSubmit buttonText="Connexion" />
=======
                        <Button text="Connexion"
                                color="white"
                                type="submit"
                        />
>>>>>>> 5038c944ac61fbcf71986d8df1a8779706a34ec0

                            <p className="mt-5">

                            Vous n'avez pas de compte ? <Link to="/register" className="text-red-600 hover:underline">Inscrivez-Vous</Link>
                        </p><br/>

                        {/* Socials authentification*/}
                        <div className="flex flex-col space-y-2 m-2">

                            {/* Google */}
                                <FormGoogle/>
                            {/* Facebook */}
                                <FormFacebook/>

                            {/* Twitter */}
                                <FormTwitter/>

                        </div>

                    </div>

                </form>

            </section> <br/><br/>

            {/*footer*/}
            <footer>
                <Footer/>
            </footer>
        </div>

<<<<<<< HEAD



=======
>>>>>>> 5038c944ac61fbcf71986d8df1a8779706a34ec0
    );
}


export default Login