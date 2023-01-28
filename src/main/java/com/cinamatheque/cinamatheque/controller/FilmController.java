package com.cinamatheque.cinamatheque.controller;

import com.cinamatheque.cinamatheque.model.Film;
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
    @GetMapping("/pubDate/{pubDate}")
    public Film getFilmWithDate(@PathVariable Date pubDate){
        return service.getFilmByFilmDate(pubDate);
    }
    @GetMapping("/title/{title}")
    public List<Film> getFilmsByTitle(@PathVariable String title){
        return service.getFilmByTitle(title);
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
