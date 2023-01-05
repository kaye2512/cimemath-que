//import react
import React from 'react';

//import l'image de footer
import footerImage from '../../components/images/7thfloor.png';
//import copyright icon
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';


//function that return  the footer
export const MyFooter = () => {
    const year = new Date().getFullYear();

    return (

        <footer className="d-flex align-items-end">
            <div className="flex justify-between">
                <img src={footerImage} alt="Footer Image" className="w-1/6"/>
                <nav className="ml-auto">
                    <a href="#">Accueil &nbsp; &nbsp;</a>
                    <a href="#">A propos &nbsp; &nbsp;</a>
                    <a href="#">Mon Compte &nbsp; &nbsp;</a>
                </nav>
            </div>
            <div className="ml-auto" style={{fontSize: '80%'}}>
                <FontAwesomeIcon icon={faCopyright}/> Copyright {year}
            </div>
        </footer>


    );


}

export default MyFooter;
