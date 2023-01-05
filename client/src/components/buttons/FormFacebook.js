//import react
import React from 'react';

//import les icones
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';

export const FormFacebook = () => {
    return (
        <button type="submit"
                className="text-white bg-blue-500 font-bold rounded-lg text-sm w-50 px-6 py-2.5 px-4 text-center">
            <FontAwesomeIcon icon={faFacebook} className="icon"/> Se connecter avec Facebook
        </button>
    );

}

