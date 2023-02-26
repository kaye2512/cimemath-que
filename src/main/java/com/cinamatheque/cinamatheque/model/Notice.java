package com.cinamatheque.cinamatheque.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "notice")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Notice {
    @Id
    private String id;
    private String title;

    public Notice(String title) {
        this.title = title;
    }
}
