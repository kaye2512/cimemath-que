package com.cinamatheque.cinamatheque.service;


import com.cinamatheque.cinamatheque.model.Film;
import com.cinamatheque.cinamatheque.repository.FilmRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@Service
public class FilmService {
    @Autowired
    private FilmRepository repository;

    public Film addFilm(Film film){
        film.setId(UUID.randomUUID().toString().split("_")[0]);
        return repository.save(film);
    }

    public List<Film> findAllFilms(){
       return repository.findAll();
    }

    public Film getFilmByFilmId(String id){
        return repository.findById(id).get();
    }

    public Film getFilmByFilmDate(String dateSortie){
        return repository.findByDateSortie(dateSortie);
    }

    public List<Film> getFilmByTitre(String titre){
        return repository.findByTitre(titre);
    }

    public Film updateFilm(Film filmRequest){
        //get the existing document from DB
        //populate new value from request to existing object/entity/document

       Film existingFilm = repository.findById(filmRequest.getId()).get();
       existingFilm.setTitre(filmRequest.getTitre());
       existingFilm.setDateSortie(filmRequest.getDateSortie());
       existingFilm.setAffiche(filmRequest.getAffiche());
       existingFilm.setVersion(filmRequest.getVersion());
       return repository.save(existingFilm);

    }

    public String deleteFilm(String id){
        repository.deleteById(id);
        return "film deleted from database";
    }
}
