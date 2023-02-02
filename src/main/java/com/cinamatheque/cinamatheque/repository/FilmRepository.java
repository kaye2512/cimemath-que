package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Film;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FilmRepository
        extends MongoRepository<Film, String>{

}
