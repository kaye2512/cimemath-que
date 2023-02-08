package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Film;
import org.springframework.data.mongodb.repository.MongoRepository;


import java.util.Date;
import java.util.List;

public interface FilmRepository
        extends MongoRepository<Film, String>{
    Film findByPubDate(Date pubDate);
    List<Film> findByTitle(String title);
}
