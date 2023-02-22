package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Film;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


import java.util.Date;
import java.util.List;

@Repository
public interface FilmRepository
        extends MongoRepository<Film, String>{
    Film findByPubDate(Date pubDate);
    List<Film> findByTitle(String title);
}
