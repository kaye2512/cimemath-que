package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Director;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DirectorRepository
        extends MongoRepository<Director, String> {

}
