package com.cinamatheque.cinamatheque.controller;

import com.cinamatheque.cinamatheque.model.Film;
import com.cinamatheque.cinamatheque.service.FilmService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/v1/films")
@AllArgsConstructor
public class FilmController {
    @Autowired
    private FilmService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Film createFilm(@RequestBody Film film){
        return service.addFilm(film);
    }
    @GetMapping
    public List<Film> getFilm(){
        return service.findAllFilms();
    }
    @GetMapping("/{id}")
    public Film getFilm(@PathVariable String id){
        return service.getFilmByFilmId(id);
    }
    @GetMapping("/dateSortie/{dateSortie}")
    public Film getFilmWithDate(@PathVariable String dateSortie){
        return service.getFilmByFilmDate(dateSortie);
    }
    @GetMapping("/titre/{titre}")
    public List<Film> getFilmsByTitre(@PathVariable String titre){
        return service.getFilmByTitre(titre);
    }
    @PutMapping
    public Film modifyFilm(@RequestBody Film film){
        return service.updateFilm(film);
    }
    @DeleteMapping("/{id}")
    public String removeFilm(@PathVariable String id){
        return service.deleteFilm(id);
    }
}
