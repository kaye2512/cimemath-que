package com.cinamatheque.cinamatheque.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document
public class Article {
    @Id private String id;
    private String title;
    private String description;
    private String note;
    private Date pub_date;
}