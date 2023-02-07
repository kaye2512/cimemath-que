package com.cinamatheque.cinamatheque.controller;

import com.cinamatheque.cinamatheque.model.Film;
import com.cinamatheque.cinamatheque.repository.FilmRepository;
import com.cinamatheque.cinamatheque.service.FilmService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/v1/films")
@AllArgsConstructor
public class FilmController {
    @Autowired
    private FilmService service;
    private FilmRepository repository;
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Film createFilm(@RequestBody Film film){
        return repository.save(film);
    }
    @GetMapping
    public List<Film> getAllFilm(){
        return repository.findAll();
    }
    @GetMapping("/{id}")
    public Film getFilmById(@PathVariable String id){
        return repository.findById(id).get();
    }
    @GetMapping("/pubDate/{pubDate}")
    public Film getFilmWithDate(@PathVariable Date pubDate){
        return repository.findByPubDate(pubDate) ;
    }
    @GetMapping("/title/{title}")
    public List<Film> getFilmsByTitle(@PathVariable String title){
        return repository.findByTitle(title);
    }
    @PutMapping
    public Film modifyFilm(@RequestBody Film filmRequest){
        //get the existing document from DB
        //populate new value from request to existing object/entity/document

        Film existingFilm = repository.findById(filmRequest.getId()).get();
        existingFilm.setTitle(filmRequest.getTitle());
        existingFilm.setDescription(filmRequest.getDescription());
        existingFilm.setPubDate(filmRequest.getPubDate());
        return repository.save(existingFilm);
    }
    @DeleteMapping("/{id}")
    public String removeFilm(@PathVariable String id){
        repository.deleteById(id);
        return "film deleted from database";
    }
}
