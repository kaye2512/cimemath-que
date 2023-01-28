package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Category;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CategoryRepository
        extends MongoRepository<Category, String> {
}
