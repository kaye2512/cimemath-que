package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Acteur;
import com.cinamatheque.cinamatheque.model.Film;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ActeurRepository
        extends MongoRepository<Acteur, String> {

    List<Film> findByFirstname(String firstname);

    List<Film> findByLastname(String lastname);
}
