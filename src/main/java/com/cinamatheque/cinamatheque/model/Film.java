package com.cinamatheque.cinamatheque.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.Date;
import java.util.List;

@Data
@Document(collection = "film")
@AllArgsConstructor
@NoArgsConstructor
public class Film {

    @Id private String id;
    private String title;
    private String description;
    private String poster;
    private Date pubDate;
    private List<Category> genres;
    private List<Acteur> actors;
    private List<Director> directors;
    @DocumentReference
    private List<Notice> noticeId;

    public Film(String title, String description, String poster, Date pubDate, List<Category> genres, List<Acteur> actors, List<Director> directors) {
        this.title = title;
        this.description = description;
        this.poster = poster;
        this.pubDate = pubDate;
        this.genres = genres;
        this.actors = actors;
        this.directors = directors;
    }
}
