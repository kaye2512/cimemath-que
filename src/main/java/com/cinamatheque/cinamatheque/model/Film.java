package com.cinamatheque.cinamatheque.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Data
@Document
public class Film {
    @Id private String id;
    private String title;
    private String description;
    @DocumentReference
    List<Notice> notice;
    private Date pubDate;
    private Map<String, Acteur> roles;
    @DocumentReference
    List<Director> Directors;
}
