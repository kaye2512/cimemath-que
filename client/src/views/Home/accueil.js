import {Link} from "react-router-dom";
import  react from "react";

import logo from "../../assets/Images/7thfloor.png";
import Gauche from "../../assets/Svg/defileGauche.svg";
import temps from "../../assets/Svg/temps.svg";
import jaime from "../../assets/Svg/jaime.svg";
import commentaire from "../../assets/Svg/commentaire.svg";
import {contenu1, contenu2, contenu3, contenu4} from "./test/Data";
import {FormActusMoment} from "../../components/buttons/FormActusMoment";
import {FormFilmMoment} from "../../components/buttons/FormFilmMoment";
import {FormShowMoment} from "../../components/buttons/FormShowMoment";
import {FormLogin} from "../../components/buttons/FormLogin";
import {FormRegister} from "../../components/buttons/FormRegister";
import {FormNavbar} from "../../components/navbar/FormNavbar";
import {FormGridFilm} from "../../components/Grid/FormGridFilm";
import {Button} from "../../components/buttons/Button";
import StarRate from "../../assets/Svg/StarRate.svg";


/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */



export const Accueil = (props)=>{

    return (
        //LandingPage page container
        <div className=" flex flex-col items-stretch justify-around font-small
                         leading-3 text-white w-full  h-full bg-black space-y-5">
            {/*Navbar*/}
            <FormNavbar/>

            {/*film/serie/manga contents*/}
            {/*doit défilier automatique, pour linstant il est statique*/}
            <FormGridFilm/>


            <div className="flex flex-row justify-between items-center space-x-4">
                <div className="flex flex-row ml-5 items-center justify-start py-8 ">
                    {/*btn de navigation*/}

                   {/* les actus du moments*/}
                    <FormActusMoment/>

                    {/*les shows du moment*/}
                    <FormShowMoment/>

                    {/*les films du moments*/}
                    <FormFilmMoment/>
                </div>


                    {/*third section in the right*/}

                    <section className="flex flex-col py-2  px-8 w-4/12 mr-20 max-w-screen-desktop mt-14 leading-3">
                        <h1 className="mb-3 text-2xl font-black text-red-600">{contenu3.title}</h1>
                        <div className="flex space-x-2">
                            <div className="flex flex-col items-center space-y-4">
                                <div className="w-14">
                                    <img className=" w-18 h-20 items-center justify-between space-x-4" src="/assets/images/F_BreakingBad.png"/>
                                </div>


                            </div>
                            {/*first block*/}
                            <div className="flex flex-col space-y-2">
                                <div>
                                    {contenu4.name}
                                </div>
                                <div className="flex justify-start items-center text-allign">
                                    <img className="" src={StarRate}/> &nbsp;{contenu4.note}
                                </div>
                                <div>
                                    {contenu4.type}
                                </div>
                                <div>
                                    <Button
                                        text ="Ajouter à ma liste"
                                        color="red"
                                        size="small"
                                    />
                                </div>&nbsp;&nbsp;

                            </div>&nbsp;&nbsp;

                        </div>
                        <div className="flex space-x-2">
                            <div className="flex flex-col items-center space-y-4">
                                <div className="w-14">
                                    <img className=" w-18 h-20 items-center justify-between space-x-4" src="/assets/images/F_OurPlanet.png"/>
                                </div>


                            </div>

                            {/*second block*/}
                            <div className="flex flex-col space-y-2">&nbsp;
                                <div>
                                    {contenu4.name2}
                                </div>
                                <div className="flex justify-start items-center text-allign">
                                    <img className="" src={StarRate}/> &nbsp; {contenu4.note2}
                                </div>
                                <div>
                                    {contenu4.type}
                                </div>
                                <div>
                                    <Button
                                        text ="Ajouter à ma liste"
                                        color="red"
                                        size="small"
                                    />
                                </div>

                            </div>&nbsp;&nbsp;

                        </div>&nbsp;&nbsp;
                        {/*third block*/}
                        <div className="flex space-x-2">
                            <div className="flex flex-col items-center space-y-4">
                                <div className="w-14">
                                    <img className=" w-18 h-20 items-center justify-between space-x-4" src="/assets/images/F_Arcane.png"/>
                                </div>


                            </div>&nbsp;
                            <div className="flex flex-col space-y-2">&nbsp;
                                <div>
                                    {contenu4.name3}
                                </div>
                                <div className="flex justify-start items-center text-allign">
                                    <img className="" src={StarRate}/> &nbsp;{contenu4.note3}
                                </div>
                                <div>
                                    {contenu4.type}
                                </div>
                                <div>
                                    <Button
                                        text ="Ajouter à ma liste"
                                        color="red"
                                        size="small"
                                    />
                                </div>&nbsp;&nbsp;

                            </div>&nbsp;&nbsp;

                        </div>




                    </section>

            </div>
                    {/*tH section*/}
                    <section className="py-6 px-2.5 w-6/12 max-w-screen-desktop flex-row flex space-x-4">

                        <div className="flex flex-row items-center space-x-4">
                            <div className="w-32">
                                <img className="object-fill  w-40 h-50"  src="/assets/images/TomHolland.png" alt="TH"/>

                            </div>

                        </div>

                        <div className="flex-col justify-between items-stretch mt-0 flex">
                            <span className="text-red-600 ml-0 text-xl font-bold leading-7">{contenu1.title}</span>
                            <div className="w-full flex-col justify-between items-center mb-1 font-small text-xs flex">
                                {/*add contenu listed from acceuil data*/}
                                <h1 className="mb-1 text-sm font-black">{contenu1.infos}</h1>
                            </div> &nbsp;

                            <div className="w-6/12 flex-row justify-between items-center mt-0 flex">
                                <img className="w-4 h-4 object-cover self-start" src={temps}/>
                                <span>{contenu1.temps}</span>
                                <img className="w-4 h-3 object-cover mb-0 ml-4" src={jaime}/>
                                <span className="mb-0">{contenu1.jaime}</span>
                                <img className="w-4 h-4 object-cover ml-2" src={commentaire}/>
                                <span className="mb-0 ml-0">{contenu1.Nbcommentaire}</span>
                            </div>
                        </div>
                    </section> &nbsp;

                    {/*scarllet section*/}
                    <section className="py-6 px-2.5 w-6/12 max-w-screen-desktop flex-row flex space-x-4">
                        <div className="flex flex-row items-center space-X-4">
                            <div className="w-32">
                                <img className="object-fill  w-40 h-50" src="/assets/images/Scarlett_Johansson.jpeg" alt="SJ"/>
                            </div>
                        </div>
                        <div className="flex-col justify-between items-stretch mt-0 flex">
                            <span className="text-red-600 ml-0 text-xl font-bold leading-7">{contenu2.title}</span>
                            <div className="w-full flex-col justify-between items-center mb-1 font-small text-xs flex">
                                <h1 className="mb-1 text-sm font-black">{contenu2.infos}</h1>
                            </div> &nbsp;

                            <div className="w-6/12 flex-row justify-between items-center mt-0 flex">
                                <img className="w-4 h-4 object-cover self-start" src={temps}/>
                                <span>{contenu2.temps}</span>
                                <img className="w-4 h-3 object-cover mb-0 ml-4" src={jaime}/>
                                <span className="mb-0">{contenu2.jaime}</span>
                                <img className="w-4 h-4 object-cover ml-2" src={commentaire}/>
                                <span className="mb-0 ml-0">{contenu2.Nbcommentaire}</span>

                            </div>
                        </div>


                    </section>








        </div>





    );
}

export default Accueil;