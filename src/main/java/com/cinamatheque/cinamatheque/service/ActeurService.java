package com.cinamatheque.cinamatheque.service;

import com.cinamatheque.cinamatheque.model.Acteur;
import com.cinamatheque.cinamatheque.model.Film;
import com.cinamatheque.cinamatheque.repository.ActeurRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.UUID;

import static org.springframework.data.mongodb.core.query.Criteria.where;


@Service
public class ActeurService {

    @Autowired
    private ActeurRepository acteurRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Acteur createActors(){
        Acteur acteur = new Acteur();

        mongoTemplate.insert(acteur);

        mongoTemplate.update(Film.class)
                .matching(where("id").is(Film.id))
                .apply(new Update().push("actor").value(acteur))
                .first();
        return acteur;

    }

}
