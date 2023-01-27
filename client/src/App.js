<<<<<<< HEAD
import './assets/App.css';
import Register from "./views/registration/Register";
import Login from "./views/connexion/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from "./views/Home/Home";
import {useEffect} from "react";
import { Accueil } from './views/Accueil/accueil';
=======
    import './assets/App.css';
import Register from "./views/registration/Register";
import Login from "./views/connexion/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {LandingPage} from "./views/LandingPage/LandingPage";
import {useEffect} from "react";
import { Accueil } from './views/Home/accueil';
import {Film} from "./views/Film/Film";

>>>>>>> 5038c944ac61fbcf71986d8df1a8779706a34ec0


function App() {



    return (
        <Router>
            <Routes>
<<<<<<< HEAD
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/Accueil" element={<Accueil/>}/>
=======
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<Accueil/>}/>
                <Route path="/film" element={<Film/>}/>
>>>>>>> 5038c944ac61fbcf71986d8df1a8779706a34ec0
                <Route path="*" element={<h1>Error 404 page not found</h1>}/>
            </Routes>
        </Router>
    );
}

export default App;