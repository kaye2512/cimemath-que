package com.cinamatheque.cinamatheque.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Data
@Document(collection = "film")
@AllArgsConstructor
@NoArgsConstructor
public class Film {

    @Id private String id;
    private String title;
    private String description;
    private String poster;
    private String pubDate;
    private List<Category> genres;
    private List<Acteur> actors;
    private List<Director> directors;
    @DocumentReference
    private List<Notice> noticeId;
}
