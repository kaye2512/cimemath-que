package com.cinamatheque.cinamatheque.model;


import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@NoArgsConstructor
public class Acteur {
    @Id private String id;
    private String firstname;
    private String lastname;
    private String birthdate;
    private String description;
    private float note;
}
