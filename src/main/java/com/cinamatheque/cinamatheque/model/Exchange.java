package com.cinamatheque.cinamatheque.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document
public class Exchange {

    @Id
    private String id;
    private String comment;
    private Date date;

    //a modifier juste après
    private String id_participant1;
    private String id_participant2;
}
