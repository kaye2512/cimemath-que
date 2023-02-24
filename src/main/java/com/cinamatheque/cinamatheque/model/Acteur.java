package com.cinamatheque.cinamatheque.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document
@NoArgsConstructor
@AllArgsConstructor
public class Acteur {
    @Id private String id;
    private String firstname;
    private String lastname;
    private String birthdate;
    private String description;
    private String image;

    public Acteur(String firstname, String lastname, String birthdate, String description, String image) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.description = description;
        this.image = image;
    }


    public Acteur(String firstname) {
        this.firstname = firstname;
    }
}
