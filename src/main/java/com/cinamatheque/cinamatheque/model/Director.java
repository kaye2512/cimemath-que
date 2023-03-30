package com.cinamatheque.cinamatheque.model;


import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Director {
    @Id private String id;
    private String fullname;
    private String birthdate;
    private String description;

}
