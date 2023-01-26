/*
*Registration page constants
*
*/


export const initialValues = {
    first_name:"",
    last_name:"",
    username:"",
    email:"",
    password:"",
    confirm_password:"",
    agree_terms:"",
}

export const regex_email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
export const regex_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])(?=.*[a-zA-Z]).{8,}$/;
export const regex_username = /^(?=.*[a-zA-Z]).{6,}$/;


export const validate = (userValues, agreeTerms)=>{
    const errors = {};

    if(!userValues.first_name){
        errors.first_name = "Vous devez rentrer votre prénom"
    }else{delete errors.first_name}

    if(!userValues.last_name){
        errors.last_name = "Vous devez rentrer votre nom"
    }else{delete errors.last_name}

    if(!regex_username.test(userValues.username)){
        errors.username = "L'identifiant doit avoir au moins 6 charactéres"
    }else{delete errors.username}

    if(!regex_email.test(userValues.email)){
        errors.email = "Entrer un e-mail valide"
    }else{delete errors.email}

    if(!regex_password.test(userValues.password)){
        errors.password = "Votre mot de passe doit contenir au moins 8 charactéres, un charactére majuscule, un charactére minuscule, un chiffre et un charactére spécial"
    }
    else{delete errors.password}

    if(userValues.password !== userValues.confirm_password){
        errors.confirm_password = "Les deux mots de passe ne se ressemble pas"
    }else{delete errors.confirm_password}
    if(!agreeTerms){
        errors.agree_terms = "Vous devez accépter les conditions d'utilisation de l'application"
    }else{delete errors.agree_terms}
    return errors;
}