package com.cinamatheque.cinamatheque.controller;

import com.cinamatheque.cinamatheque.model.Acteur;
import com.cinamatheque.cinamatheque.model.Category;
import com.cinamatheque.cinamatheque.model.Director;
import com.cinamatheque.cinamatheque.model.Film;
import com.cinamatheque.cinamatheque.repository.FilmRepository;
import com.cinamatheque.cinamatheque.service.FilmService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/v1/films")
public class FilmController {
    @Autowired
    private FilmService filmService;
    @Autowired
    private FilmRepository filmRepository;
    //safe film inside database with file safe
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Film createFilm(@RequestParam("file") MultipartFile file,
                           @RequestParam("title") String title,
                           @RequestParam("description") String description,
                           @RequestParam("pubDate") Date pubDate,
                           @RequestParam("genres") List<Category> genres,
                           @RequestParam("actors") List<Acteur> actors,
                           @RequestParam("directors") List<Director> directors
    ) throws IOException {
        return filmService.safeFilm(file, title, description, pubDate, genres, actors, directors) ;
    }

    // get film with pagination
    @GetMapping
    public List<Film> getAllFilm(@RequestParam(defaultValue = "0") int page,
                                 @RequestParam(defaultValue = "5") int size,
                                 @RequestParam(defaultValue = "title") String sortby) {

        return filmService.getFilmsBypagination(page, size, sortby, "ASC");
    }
    // get film by id
    @GetMapping("/{id}")
    public Film getFilmById(@PathVariable String id){
        return filmRepository.findById(id).get();
    }
    // get film by date se sorti
    @GetMapping("/pubDate/{pubDate}")
    public Film getFilmWithDate(@PathVariable Date pubDate){
        return filmRepository.findByPubDate(pubDate) ;
    }
    // get film by title
    @GetMapping("/title/{title}")
    public List<Film> getFilmsByTitle(@PathVariable String title){
        return filmRepository.findByTitle(title);
    }

    //modification des film
    @PutMapping
    public Film modifyFilm(@RequestBody Film filmRequest){
        //get the existing document from DB
        //populate new value from request to existing object/entity/document

        Film existingFilm = filmRepository.findById(filmRequest.getId()).get();
        existingFilm.setTitle(filmRequest.getTitle());
        existingFilm.setDescription(filmRequest.getDescription());
        existingFilm.setPubDate(filmRequest.getPubDate());
        existingFilm.setGenres(filmRequest.getGenres());
        existingFilm.setActors(filmRequest.getActors());
        existingFilm.setDirectors(filmRequest.getDirectors());
        return filmRepository.save(existingFilm);
    }
    // deleting film
    @DeleteMapping("/{id}")
    public String removeFilm(@PathVariable String id){
        filmRepository.deleteById(id);
        return "film deleted from database";
    }
}
