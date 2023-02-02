package com.cinamatheque.cinamatheque.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.Map;
import java.util.Set;

@Data
@Document
public class Film {
    @Id private String id;
    private String title;
    private String description;
    private String note;
    private Date pubDate;
    private Map<String, Acteur> roles;
    private Set<Director> Directors;
}
