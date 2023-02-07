package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Acteur;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

public interface ActeurRepository
        extends MongoRepository<Acteur, String> {

    List<Acteur> findByFirstname(String firstname);

    List<Acteur> findByLastname(String lastname);


}
