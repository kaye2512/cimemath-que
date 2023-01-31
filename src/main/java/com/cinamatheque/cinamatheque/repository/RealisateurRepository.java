package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Realisateur;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RealisateurRepository
        extends MongoRepository<Realisateur, String> {

}
