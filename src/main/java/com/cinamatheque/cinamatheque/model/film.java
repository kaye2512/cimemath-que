package com.cinamatheque.cinamatheque.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document(collection = "film")
@AllArgsConstructor
public class Film {

    @Id
    private String id;
    private String titre;
    private String dateSortie;
    private String affiche;
    private String version;



}
