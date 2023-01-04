//import react
import React from 'react';

//import le composants
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export const FormFacebook = () => {
    return (
        <button type="submit"
                className="text-white bg-blue-500 font-bold rounded-lg text-sm w-50 px-6 py-2.5 px-4 text-center">
            <FontAwesomeIcon icon="facebook"/> Se connecter avec Facebook
        </button>
    );

}

