package com.cinamatheque.cinamatheque.model;


import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document
@NoArgsConstructor
public class Acteur {
    @Id private String id;
    private String firstname;
    private String lastname;
    private String birthdate;
    private String description;
    private String image;

    public Acteur(String firstName, String lastName, String birthday, String paragraph, String paragraph1) {
        this.firstname = firstName;
        this.lastname = lastName;
        this.birthdate = birthday;
        this.description = paragraph;
        this.image = paragraph1;
    }
}
