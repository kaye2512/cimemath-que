package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Critic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CriticRepository extends MongoRepository<Critic, String> {

}
