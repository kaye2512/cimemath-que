package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Article;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ArticleRepository extends MongoRepository<Article, String> {

}
