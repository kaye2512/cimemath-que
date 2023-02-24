package com.cinamatheque.cinamatheque.controller;

import com.cinamatheque.cinamatheque.model.Film;
import com.cinamatheque.cinamatheque.repository.FilmRepository;
import com.cinamatheque.cinamatheque.service.FilmService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/v1/films")
public class FilmController {
    @Autowired
    private FilmService filmService;
    @Autowired
    private FilmRepository filmRepository;
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Film createFilm(@RequestBody Film film)
    {
        return filmRepository.save(film);
    }

    @GetMapping
    public List<Film> getAllFilm(@RequestParam(defaultValue = "0") int page,
                                 @RequestParam(defaultValue = "5") int size,
                                 @RequestParam(defaultValue = "title") String sortby) {

        return filmService.getFilmsBypagination(page, size, sortby, "ASC");
    }

    @GetMapping("/{id}")
    public Film getFilmById(@PathVariable String id){
        return filmRepository.findById(id).get();
    }

    @GetMapping("/pubDate/{pubDate}")
    public Film getFilmWithDate(@PathVariable Date pubDate){
        return filmRepository.findByPubDate(pubDate) ;
    }

    @GetMapping("/title/{title}")
    public List<Film> getFilmsByTitle(@PathVariable String title){
        return filmRepository.findByTitle(title);
    }

    @PutMapping
    public Film modifyFilm(@RequestBody Film filmRequest){
        //get the existing document from DB
        //populate new value from request to existing object/entity/document

        Film existingFilm = filmRepository.findById(filmRequest.getId()).get();
        existingFilm.setTitle(filmRequest.getTitle());
        existingFilm.setDescription(filmRequest.getDescription());
        existingFilm.setPubDate(filmRequest.getPubDate());
        return filmRepository.save(existingFilm);
    }

    @DeleteMapping("/{id}")
    public String removeFilm(@PathVariable String id){
        filmRepository.deleteById(id);
        return "film deleted from database";
    }
}
