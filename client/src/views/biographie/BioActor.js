import react from "react";
import {FormNavbar} from "../../components/navbar/FormNavbar";
import {FormGridFilm} from "../../components/Grid/FormGridFilm";
import {Contenu} from "../Film/test/Data";
import {Button} from "../../components/buttons/Button";



export const BioActor = () => {

    return(
        <div className="mx-5 py-12 my-0 flex flex-col items-center space-y-5">
            {/*Navbar*/}
            <FormNavbar/>

            <section className="py-6 px-20 w-full max-w-screen-desktop">
                <h1 className="mb-3 text-2xl font-black">{Contenu.name}</h1>
                <div className="flex space-x-9">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-40">
                            <img className="object-fill w-40 h-52" src="/assets/images/bd.jpg" alt="bd"/>
                        </div>

                    </div>

                    <div className="flex flex-col space-y-2">

                        <div>
                            <div className="flex space-x-6">
                                <div className="text-red-600 space-y-4">
                                    <p>Etat civil:</p>
                                    <p>Nationnalité:</p>
                                    <p>Naisance:</p>
                                    <p>Age:</p>

                                </div>
                                <div className="space-y-4">
                                    <p>{Contenu.pays.map((pays)=>{
                                        return(`${pays}, `);
                                    })}
                                    </p>
                                    <p>{Contenu.realisateur.map((realisateur)=>{
                                        return(`${realisateur}, `);
                                    })}
                                    </p>
                                    <p>{Contenu.genre.map((genre)=>{
                                        return(`${genre}, `);
                                    })}
                                    </p>
                                    <p>{Contenu.tag.map((tag)=>{
                                        return(`${tag}, `);
                                    })}
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );

}