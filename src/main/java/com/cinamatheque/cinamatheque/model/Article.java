package com.cinamatheque.cinamatheque.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.Date;
import java.util.List;

@Data
@Document
public class Article {
    @Id private String id;
    private String title;
    private String description;
    @DocumentReference
    private List<Critic> note;
}