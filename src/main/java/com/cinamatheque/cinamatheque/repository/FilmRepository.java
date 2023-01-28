package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Film;
import org.springframework.data.mongodb.repository.MongoRepository;


import java.util.List;

public interface FilmRepository
        extends MongoRepository<Film, String>{

    Film findByDateSortie(String dateSortie);

    List<Film> findByTitre(String titre);
}
