//import react
import React from 'react';

//import le composants
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export const FormApple = () => {
    return (
        <button type="submit"
                className="text-white bg-black font-bold rounded-lg text-sm w-50 px-6 py-2.5 px-4 text-center">
            <FontAwesomeIcon icon="google"/> Se connecter avec Apple
        </button>

    );

}