package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Acteur;
import com.cinamatheque.cinamatheque.model.Film;
import org.springframework.data.mongodb.repository.MongoRepository;


import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface FilmRepository
        extends MongoRepository<Film, String>{
    Map<String, Acteur> roles = new HashMap<>();
    Film findByPubDate(Date pubDate);

    List<Film> findByTitle(String title);




}
