package com.cinamatheque.cinamatheque.service;




import com.cinamatheque.cinamatheque.model.Acteur;
import com.cinamatheque.cinamatheque.model.Category;
import com.cinamatheque.cinamatheque.model.Director;
import com.cinamatheque.cinamatheque.model.Film;
import com.cinamatheque.cinamatheque.repository.FilmRepository;
import lombok.AllArgsConstructor;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.Base64;
import java.util.Date;
import java.util.List;



@Service
public class FilmService {
    @Autowired
    private FilmRepository filmRepository;
    public List<Film> getFilmsBypagination(int pageNo, int pageSize, String sortBy, String sortDir) {
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();

        // create Pageable instance
        Pageable pageable = PageRequest.of(pageNo, pageSize, sort);

        Page<Film> films = filmRepository.findAll(pageable);

        // get content for requested page

        return films.getContent();
    }

    public Film safeFilm (MultipartFile file, String title,String description, Date pubDate, List<Category> genres, List<Acteur> actors, List<Director> directors) throws IOException {

        Film film = new Film();
        film.setPoster(Arrays.toString(Base64.getEncoder().encode(file.getBytes())));
        film.setTitle(title);
        film.setDescription(description);
        film.setPubDate(pubDate);
        film.setGenres(genres);
        film.setActors(actors);
        film.setDirectors(directors);

        filmRepository.save(film);
        return film;
    }
}
