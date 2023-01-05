//import react
import React from 'react';

//import les icones
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';

export const FormGoogle = () => {
    return (
        <button type="submit"
                className="text-black bg-white font-bold rounded-lg text-sm w-50 px-6 py-2.5 px-4 text-center">
            <FontAwesomeIcon icon={faGoogle} className="icon"/> Se connecter avec Google
        </button>
    );

}