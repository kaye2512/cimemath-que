import {Link} from "react-router-dom";
import  react from "react";
import Slider from 'react-slick';
import logo from "../../assets/Images/7thfloor.png";
import img1 from "../../assets/Images/9.jpeg";
import img2 from "../../assets/Images/2.jpg";
import img3 from "../../assets/Images/3.jpg";
import img4 from "../../assets/Images/3.jpeg";
import img5 from "../../assets/Images/5.jpeg";
import img6 from "../../assets/Images/6.jpeg";
import img7 from "../../assets/Images/8.jpeg";
import Gauche from "../../assets/Svg/defileGauche.svg";
import temps from "../../assets/Svg/temps.svg";
import jaime from "../../assets/Svg/jaime.svg";
import commentaire from "../../assets/Svg/commentaire.svg";
import {contenu1,contenu2} from "./test/Data";


/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */



export const Accueil = (props)=>{

    return (
       /*  navbar*/
        <div className=" flex flex-col items-stretch justify-around font-small
                         leading-3 text-white w-full  h-full bg-black space-y-5 ">
            <section className="flex flex-auto items-center justify-evenly h-full pr-2 pl-5 ">
                <Link to="/">
                    <img className="bg-center h-18 w-24 mr-5" src={logo} alt="Logo" />
                </Link>
                <Link to="/film" className="mt-0 text-sm">tops shows </Link>
                <Link to="/" className="mt-0 text-sm">tops stars</Link>
                <Link to="/" className="mt-0 text-sm ">Ma liste</Link>

                <div className="text-gray-400 flex-row justify-between items-center pt-1">
                    {/*static searchbar*/}
                    <input className="search-icon mt-0 w-56 h-8 rounded-full border bg-black text-gray-400 font-light flex
                                       mb-1 ml-16 pl-3 mr-12"
                           type="text"
                           placeholder="Recherche ...."
                    />
                   {/* <span className="mt-0 ">recherche</span>
                    <img className="w-10 h-7 " src={rectangle1158} />*/}

                </div>

            <div className="flex flex-row ml-5 items-center justify-center ">
                {/*btn connecter render vers connexion*/}
                <Link to="/login" className="text-black bg-white font-small rounded-lg
                        text-xs w-40 h-8 pt-2 text-center" type="button">
                    Connectez vous
                </Link>
                {/*btn inscription render vers register*/}
                <Link to="/register" className="text-black bg-red-600  font-small rounded-lg
                    text-xs w-40 h-8 ml-5 pt-2 text-center mr-4" type="button">
                    Créer un compte
                </Link>

            </div>
            </section>
            {/*end navbar contents*/}

            {/*film/serie/manga contents*/}

            <div className="grid grid-cols-7 h-48 max-w-4xl bg-slate-50  mx-auto mt-5 ">
                <div><img src={img5}/></div>
                <div><img src={img2}/></div>
                <div><img src={img3}/></div>
                <div><img src={img4}/></div>
                <div><img src={img1}/></div>
                <div><img src={img6}/></div>
                <div><img src={img7}/></div>
            </div>

            <div className="flex flex-row justify-between items-center space-X-4">

                <div className="flex flex-row ml-5 items-center justify-start ">
                    {/*btn de navigation*/}

                    <Link to="#actus" className="text-black bg-white font-semibold rounded-full
                        text-xs w-40 h-8 pt-2 text-center" type="button">
                        Les actus du moments
                    </Link>
                    <Link to="#shows" className="text-black bg-white  font-semibold rounded-full
                    text-xs w-40 h-8 ml-5 pt-2 text-center mr-0" type="button">
                        Les shows du moments
                    </Link>
                    <Link to="/film" className="text-black bg-white  font-semibold rounded-full
                    text-xs w-40 h-8 ml-5 pt-2 text-center mr-0 " type="button">
                        Les fims du moments
                    </Link>

                </div>


                {/*third section*/}

                <section className="flex flex-row py-6  px-2.5 w-4/12 mr-20 max-w-screen-desktop ">

                </section>


            </div>

            {/*tH section*/}
            <section className="py-6 px-2.5 w-6/12 max-w-screen-desktop flex-row flex space-x-4">
                <div className="flex flex-row items-center space-X-4">
                    <div className="w-32">
                        <img className="object-fill  w-40 h-50"  src="/assets/images/TomHolland.png" alt="TH"/>

                    </div>

                </div>

                <div className="flex-col justify-between items-stretch mt-0 flex">
                    <span className="text-red-600 ml-0 text-xl font-bold leading-7">Nouveau spiderman en 2023</span>
                    <div className="w-full flex-col justify-between items-center mb-1 font-small text-xs flex">
                        {/*add contenu*/}
                        <h1 className="mb-1 text-sm font-black">{contenu1.infos}</h1>



                    </div> &nbsp;

                    <div className="w-6/12 flex-row justify-between items-center mt-0 flex">
                        <img className="w-4 h-4 object-cover self-start" src={temps}/>
                        <span>il y’a 1 jour</span>
                        <img className="w-4 h-3 object-cover mb-0 ml-4" src={jaime}/>
                        <span className="mb-0">12</span>
                        <img className="w-4 h-4 object-cover ml-2" src={commentaire}/>
                        <span className="mb-0 ml-0">25</span>

                    </div>
                </div>
            </section>

            {/*scarllet section*/}
            <section className="py-6 px-2.5 w-6/12 max-w-screen-desktop flex-row flex space-x-4">
                <div className="flex flex-row items-center space-X-4">
                    <div className="w-32">
                        <img className="object-fill  w-40 h-50" src="/assets/images/Scarlett_Johansson.jpeg" alt="SJ"/>

                    </div>

                </div>

                <div className="flex-col justify-between items-stretch mt-0 flex">
                    <span className="text-red-600 ml-0 text-xl font-bold leading-7">Nouveau spiderman en 2023</span>
                    <div className="w-full flex-col justify-between items-center mb-1 font-small text-xs flex">
                        <h1 className="mb-1 text-sm font-black">{contenu1.infos}</h1>

                    </div> &nbsp;
                    <div className="w-6/12 flex-row justify-between items-center mt-0 flex">
                        <img className="w-4 h-4 object-cover self-start" src={temps}/>
                        <span>il y’a 1 jour</span>
                        <img className="w-4 h-3 object-cover mb-0 ml-4" src={jaime}/>
                        <span className="mb-0">12</span>
                        <img className="w-4 h-4 object-cover ml-2" src={commentaire}/>
                        <span className="mb-0 ml-0">25</span>

                    </div>
                </div>


            </section>








        </div>





    );
}

export default Accueil;