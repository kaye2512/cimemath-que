package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Acteur;
import com.cinamatheque.cinamatheque.model.Notice;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ActeurRepository
        extends MongoRepository<Acteur, String> {

    List<Acteur> findByFirstname(String firstname);

    List<Acteur> findByLastname(String lastname);


}
