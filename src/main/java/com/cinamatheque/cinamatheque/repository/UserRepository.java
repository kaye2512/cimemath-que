package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;


public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);
}
