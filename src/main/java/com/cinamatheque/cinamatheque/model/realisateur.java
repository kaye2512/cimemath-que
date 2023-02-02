package com.cinamatheque.cinamatheque.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@Document
public class Realisateur {
    @Id
    private String id;
    private String nom;
    private String prenom;
    private String date_naissance;
    private String nationalite;
    private String description;

    public Realisateur(String nom,
                       String prenom,
                       String date_naissance,
                       String nationalite,
                       String description) {
        this.nom = nom;
        this.prenom = prenom;
        this.date_naissance = date_naissance;
        this.nationalite = nationalite;
        this.description = description;
    }
}
