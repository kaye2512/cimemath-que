package com.cinamatheque.cinamatheque.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Data
@Document(collection = "film")
@AllArgsConstructor
@NoArgsConstructor
public class Film {

    @Id private String id;
    private String title;
    private String description;
    private String poster;
    private String pubDate;
    @DocumentReference
    private List<Acteur> actor;
    @DocumentReference
    private List<Director> directorsId;
    @DocumentReference
    private List<Notice> noticeId;
}
