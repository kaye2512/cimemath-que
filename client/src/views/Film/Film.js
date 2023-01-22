import {Button} from "../../components/buttons/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import {Actors, Commentaires, Contenu, Reviews} from "./test/Data";
import {FormNavbar} from "../../components/navbar/FormNavbar";

export const  Film = ()=>{

    return (
        <div className="mx-5 py-12 my-0 flex flex-col items-center space-y-5">
            {/*navbar*/}
            <FormNavbar/>

            <section className="py-6 px-20 w-full max-w-screen-desktop">
                <h1 className="mb-3 text-2xl font-black">{Contenu.name}</h1>
                <div className="flex space-x-9">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-40">
                            <img className="object-fill w-40 h-52" src="/assets/images/bd.jpg" alt="bd"/>
                        </div>
                        <div className="flex flex-col space-y-6">

                            <Button text="Regarder le trailer"
                                    color="white"
                                    size="small"
                                    type="link"
                            />
                            <Button text="Ajouter à ma liste"
                                    color="red"
                                    size="small"
                                    type="link"
                            />


                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <div>
                           <Button text={Contenu.note}
                                   color="orange"
                                   size="note"
                           />
                        </div>

                        <div>
                            <h3 className="text-red-600 font-bold text-lg my-1.5">Synopsis et infos</h3>
                            <p>
                                {Contenu.infos}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-red-600 font-bold text-lg my-1.5">Description</h3>
                            <div className="flex space-x-6">
                                <div>
                                    <p>Pays</p>
                                    <p>Réalisateur</p>
                                    <p>Genre</p>
                                    <p>Mots clés</p>

                                </div>
                                <div>
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

            <section className="py-6 px-20 w-full max-w-screen-desktop">
                <h1 className="mb-3 text-2xl text-red-600 font-bold">Acteurs et casting</h1>
                <div className="flex flex-wrap -mr-12">
                    {Actors.map(({name,photo})=>{
                        return(
                            <div className="mb-7 ml-12">
                                <p>{name}</p>
                                <img className="object-fill w-40 h-52 rounded-md" src={photo} alt="actor"/>
                            </div>

                        );
                    })}


                </div>
            </section >

            <section className="py-6 px-20 w-full max-w-screen-desktop">
                <div className="flex justify-between text-red-600 underline">
                    <h1 className="mb-3 text-2xl text-red-600 font-bold">Reviews</h1>
                    <a href="#Ecrire">Ecrire un review</a>
                </div>
                {
                    Reviews.map(({name,image,review,note})=>{
                        return (
                            <div className="flex space-x-16">
                                <div className="flex flex-col space-y-4">
                                    <div className="flex space-x-1 items-center">
                                        <img className="object-fill w-10 h-10 rounded-full" src={image} alt="user"/>
                                        <p>{name}</p>
                                    </div>
                                    <div>
                                        <p className="whitespace-normal">
                                            {review}
                                        </p>
                                        <a className="underline" href="#lire plus">Lire plus...</a>
                                    </div>
                                </div>

                                <div className="flex border-2 border-black px-6 py-1.5 rounded-md h-28 space-x-4">
                                    <div className="flex flex-col">
                                        <p>histoire</p>
                                        <p>acting</p>
                                        <p>musique</p>
                                        <p>à revoir</p>
                                    </div>

                                    <div className="flex flex-col">
                                        <p>{note.histoire}/10</p>
                                        <p>{note.acting}/10</p>
                                        <p>{note.musique}/10</p>
                                        <p>{note.revoir}/10</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }


            </section>

            <section className="py-6 px-20 w-full max-w-screen-desktop">
                <h1 className="mb-3 text-2xl text-red-600 font-bold">Commentaires</h1>
                {
                 Commentaires.map(({name,image,commentaire})=>{
                     return (
                         <div className="flex mb-4 space-x-2">
                             <div>
                                 <img className="object-fill w-10 h-10 rounded-full" src={image} alt="user"/>
                             </div>

                             <div className="flex flex-col">
                                 <p>{name}</p>
                                 <p>{commentaire}</p>

                             </div>
                         </div>
                     );
                 })

                }

                    <form className="flex mx-10">
                        <textarea className="appearance-none bg-transparent border-none w-full max-w-2xl text-slate-100 mr-2 py-1 px-2 "
                               placeholder="écrire un commentaire"
                               rows="3"
                        ></textarea>
                        <button>
                            <FontAwesomeIcon icon={faPaperPlane}/>
                        </button>
                    </form>
            </section>
        </div>
    );
}