import img5 from "../../assets/Images/5.jpeg";
import img2 from "../../assets/Images/2.jpg";
import img3 from "../../assets/Images/3.jpg";
import img4 from "../../assets/Images/3.jpeg";
import img1 from "../../assets/Images/9.jpeg";
import img6 from "../../assets/Images/6.jpeg";
import img7 from "../../assets/Images/8.jpeg";

export const FormGridFilm = () => {

    return(
        <div className="grid grid-cols-7 h-48 max-w-4xl bg-slate-50  mx-auto mt-5 ">
            <div><img src={img5} alt= "img5"/></div>
            <div><img src={img2} alt="img2"/></div>
            <div><img src={img3} alt={"img3"}/></div>
            <div><img src={img4} alt="img4"/></div>
            <div><img src={img1} alt="Img1"/></div>
            <div><img src={img6} alt="img6"/></div>
            <div><img src={img7} alt="ilg7"/></div>
        </div>

    );

}