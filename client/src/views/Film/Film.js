import {Button} from "../../components/buttons/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane";

export const  Film = ()=>{
    const Actors =[
        {
            name:"Bryan cranston",
            photo:"/assets/images/bryan.jpg"
        },
        {
            name:"Aaron Paul",
            photo:"/assets/images/aron.jpg"
        },
        {
            name:"Bob Odenkirk",
            photo:"/assets/images/boboden.jpg"
        },
        {
            name:"Dean Norris",
            photo:"/assets/images/deannoris.jpg"
        },
        {
            name:"Anna Gunn",
            photo:"/assets/images/annagunn.jpg"
        },
        {
            name:"RJ Mitte",
            photo:"/assets/images/rjmite.jpg"
        },
        {
            name:"Betsy Brandt",
            photo:"/assets/images/betsy.jpg"
        },
        {
            name:"Jonathan Banks",
            photo:"/assets/images/johnatan.jpg"
        },

    ]

    const users = [
        {
            name:"sherlock",
            image:"/assets/images/avatar1.png"
        },


    ]

    const Commentaires =[
        {
            name:"millie",
            image:"/assets/images/avatar2.jpg",
            commentaire:"On veut un remake de la saison 8"
        },

        {
            name:"torcy",
            image:"/assets/images/avatar3.jpg",
            commentaire: "Très grande série ( culte ) house of the dragon a encore plus de budget que hot sera une grande série mais il n’y a pas autant d’enjeux."
        },
        {
            name:"glad",
            image:"/assets/images/avatar4.jpg",
            commentaire: "Aucune clémence envers son meurtrier, c'est plus que normal !Et non, c'est faux ! John avait raison d'aider les sauvageons, car ce ne sont pas eux les vrais ennemis mais les marcheurs blancs."
        },
    ]

    const Reviews = [
        {
            name:"sherlock",
            image:"/assets/images/avatar1.png",
            review:" At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum\n" +
                "                                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,\n" +
                "                                similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.\n" +
                "                                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est\n" +
                "                                eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas\n" +
                "                                assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum\n" +
                "                                necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum\n" +
                "                                rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut\n" +
                "                                perferendis doloribus asperiores repellat",
            note:{
                histoire:10,
                acting:10,
                musique:10,
                revoir:10
            },
        }
    ]
    return (
        <div className="mx-5 py-12 my-0 flex flex-col items-center space-y-5">
            <section className="py-6 px-20 w-full max-w-screen-desktop">
                <h1 className="mb-3 text-2xl font-black">Breaking bad</h1>
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
                           <Button text="9.4"
                                   color="orange"
                                   size="note"
                           />
                        </div>

                        <div>
                            <h3 className="text-red-600 font-bold text-lg my-1.5">Synopsis et infos</h3>
                            <p>
                                Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique.
                                Pour subvenir aux besoins de Skyler, sa femme enceinte, et de Walt Junior,
                                son fils handicapé, il est obligé de travailler doublement.
                                Son quotidien déjà morose devient carrément noir lorsqu'il apprend qu'il est
                                atteint d'un incurable cancer des poumons. Les médecins ne lui donnent pas plus de deux ans à vivre.
                                Pour réunir rapidement beaucoup d'argent afin de mettre sa famille à l'abri,
                                Walter ne voit plus qu'une solution : mettre ses connaissances en chimie à profit
                                pour fabriquer et vendre du crystal meth, une drogue de synthèse qui rapporte beaucoup.
                                Il propose à Jesse, un de ses anciens élèves devenu un petit dealer de seconde zone,
                                de faire équipe avec lui. Le duo improvisé met en place un labo itinérant dans un vieux camping-car.
                                Cette association inattendue va les entraîner dans une série de péripéties tant comiques que pathétiques.
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
                                    <p>USA</p>
                                    <p>Vince Gilligan</p>
                                    <p>Drame, Policier, Thriller</p>
                                    <p>comédie noire, cancer,  traffic de drogue, acteur masculin intelligent, acteur masculin dur à cuir</p>
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
                                        <p>10/{note.histoire}</p>
                                        <p>10/{note.acting}</p>
                                        <p>10/{note.musique}</p>
                                        <p>10/{note.revoir}</p>
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