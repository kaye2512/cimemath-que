package com.cinamatheque.cinamatheque.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document
public class Film {

    @Id
    private String id;
    private String titre;
    private Date date_sortie;
    private String affiche;
    private String version;

    public Film(String titre,
                Date date_sortie,
                String affiche,
                String version) {
        this.titre = titre;
        this.date_sortie = date_sortie;
        this.affiche = affiche;
        this.version = version;
    }

}
