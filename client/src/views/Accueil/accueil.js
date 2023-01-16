import {Link} from "react-router-dom";
import  react from "react";
import img1 from "../../assets/Images/9.jpeg"
import img2 from "../../assets/Images/2.jpg"
import img3 from "../../assets/Images/3.jpg"
import img4 from "../../assets/Images/3.jpeg"
import img5 from "../../assets/Images/5.jpeg"
import img6 from "../../assets/Images/6.jpeg"
import img7 from "../../assets/Images/8.jpeg"




export const Accueil = (props)=>{


    return (

            <div  >
               <div class="grid grid-cols-7 h-48 max-w-4xl bg-slate-50  mx-auto mt-5 ">
                    <div ><img src={img5}/></div>
                    <div ><img src={img2}/></div>
                    <div ><img src={img3}/></div>
                    <div ><img src={img4}/></div>
                    <div ><img src={img1}/></div>
                    <div ><img src={img6}/></div>
                    <div ><img src={img7}/></div>


               </div>
        </div>




    );
}

