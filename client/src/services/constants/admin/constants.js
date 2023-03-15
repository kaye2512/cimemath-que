export const actorInitialValues = {
    firstname:"",
    lastname:"",
    description:"",
    birthdate: "",
}

export const validateActor = (actorValues)=> {
    const errors = {};
    if (!actorValues.firstname) {
        errors.firstname = "Vous devez rentrer le prénom de l'acteur";
    } else {
        delete errors.firstname
    }

    if (!actorValues.lastname) {
        errors.lastname = "Vous devez rentrer le nom de l'acteur";
    } else {
        delete errors.lastname
    }

    if (!actorValues.birthdate) {
        errors.birthdate = "la date de naissance de l'acteur";
    } else {
        delete errors.birthdate
    }

    if(!actorValues.description){
        errors.description= "Vous devez rentrer la description de l'acteur";
    }else{delete errors.description}

    return errors;
}

export const filmInitialValues = {
    title:"",
    description:"",
    pubDate:"",
    genres:"",
    actorFirstname:"",
    directorsFirstname:"",
}

export const validateFilm = (filmValues)=>{
    const errors = {};
    if (!filmValues.title) {
        errors.title = "Vous devez entrer le titre du film";
    } else {
        delete errors.title
    }

    if (!filmValues.description) {
        errors.description = "Vous devez entrer la description du film";
    } else {
        delete errors.description
    }

    if (!filmValues.pubDate) {
        errors.pubDate = "Vous devez entrer l'année de publication du film";
    } else {
        delete errors.pubDate
    }

    if (!filmValues.genres) {
        errors.genres = "Vous devez entrer le genre du film";
    } else {
        delete errors.genres
    }

    if (!filmValues.actorFirstname) {
        errors.actorFirstname = "Vous devez entrer le nom de l'acteur du film";
    } else {
        delete errors.actorFirstname
    }

    if (!filmValues.directorsFirstname) {
        errors.directorsFirstname = "Vous devez entrer le nom du realisateur du film";
    } else {
        delete errors.directorsFirstname
    }
    
}

