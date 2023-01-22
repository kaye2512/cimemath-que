package com.cinamatheque.cinamatheque.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document
public class film {

    @Id
    private String id;
    private String titre;
    private Date date_sortie;
    private String affiche;
    private String version;

}
