import {Link} from "react-router-dom";
import  react from "react";


export const LandingPage = (props)=>{


    return (

            <div>
            <p>Home</p>
            <p className="mt-7">
                <Link to="/Register" className="text-red-600 hover:underline">Inscrivez-Vous</Link>
            </p>
            <p className="mt-7">
                <Link to="/Login" className="text-red-600 hover:underline">Connecter vous</Link>
            </p>
            <p className="mt-7">
                <Link to="/Accueil" className="text-red-600 hover:underline">Accueil</Link>
            </p>

        </div>




    );
}

