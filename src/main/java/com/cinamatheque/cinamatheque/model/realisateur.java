package com.cinamatheque.cinamatheque.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document
public class realisateur {
    @Id
    private String id;
    private String nom;
    private String prenom;
    private Date date_naissance;
    private String nationalite;
    private String description;
}
