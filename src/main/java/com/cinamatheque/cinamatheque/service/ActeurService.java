package com.cinamatheque.cinamatheque.service;

import com.cinamatheque.cinamatheque.model.Acteur;
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

    public Acteur updateActeur(Acteur acteurRequest){
        //get the existing document from DB
        //populate new value from request to existing object/entity/document

        Acteur existingActeur = repository.findById(acteurRequest.getId()).get();
        existingActeur.setFirstname(acteurRequest.getFirstname());
        existingActeur.setLastname(acteurRequest.getLastname());
        existingActeur.setBirthdate(acteurRequest.getBirthdate());
        existingActeur.setDescription(acteurRequest.getDescription());
        existingActeur.setNote(acteurRequest.getNote());
        return repository.save(existingActeur);
    }

    public  String deletingActeur(String id){
        repository.deleteById(id);
        return "deleting successfully";
    }



}
