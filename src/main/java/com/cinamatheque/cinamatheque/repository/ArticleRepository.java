package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Article;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends MongoRepository<Article, String> {

}
