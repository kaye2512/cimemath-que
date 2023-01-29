package com.cinamatheque.cinamatheque.service;

import com.cinamatheque.cinamatheque.model.Acteur;
import com.cinamatheque.cinamatheque.model.Film;
import com.cinamatheque.cinamatheque.repository.ActeurRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@Service
public class ActeurService {
    @Autowired
    private ActeurRepository repository;

    public Acteur addActeur(Acteur acteur){
        acteur.setId(UUID.randomUUID().toString().split("_")[0]);
        return repository.save(acteur);
    }

    public List<Acteur> findAllActeur(){
        return repository.findAll();
    }

    public Acteur getfActeurById(String id){
        return repository.findById(id).get();
    }

    public List<Film> getActeurByFirstname(String firstname)
    {
        return repository.findByFirstname(firstname);
    }

    public List<Film> getActeurByLastname(String lastname){
        return repository.findByLastname(lastname);
    }


}
