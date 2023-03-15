package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Acteur;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface ActeurRepository
        extends MongoRepository<Acteur, String> {
    List<Acteur> findByFullnameLike(String fullname);

    List<Acteur> findByFullname(String fullname);

}
