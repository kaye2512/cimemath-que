import {Link} from "react-router-dom";
import  react from "react";
import logo from "../../assets/Images/7thfloor.png";
import img1 from "../../assets/Images/9.jpeg";
import img2 from "../../assets/Images/2.jpg";
import img3 from "../../assets/Images/3.jpg";
import img4 from "../../assets/Images/3.jpeg";
import img5 from "../../assets/Images/5.jpeg";
import img6 from "../../assets/Images/6.jpeg";
import img7 from "../../assets/Images/8.jpeg";





export const Accueil = (props)=>{

    return (
       /* static navbar*/
        <div className=" flex flex-row items-stretch justify-around font-small
                         leading-3 text-white w-full h-full bg-black ">
            <div className="flex flex-auto items-center justify-evenly h-full pr-2 pl-5 mr-12 ">
                <Link to="/">
                    <img className="bg-center h-20 w-24 mr-5" src={logo} alt="Logo" />
                </Link>
                <Link to="/film" className="mt-0 text-sm">tops shows </Link>
                <Link to="/" className="mt-0 text-sm">tops stars</Link>
                <Link to="/" className="mt-0 text-sm ">Ma liste</Link>
            </div>
                <div className="text-gray-400 flex-row justify-between items-center pt-6">
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


            {/*<div className="grid grid-cols-7 h-48 max-w-4xl bg-slate-50  mx-auto mt-5 ">
                <div><img src={img5}/></div>
                <div><img src={img2}/></div>
                <div><img src={img3}/></div>
                <div><img src={img4}/></div>
                <div><img src={img1}/></div>
                <div><img src={img6}/></div>
                <div><img src={img7}/></div>
            </div>*/}

        </div>





    );
}

export default Accueil;