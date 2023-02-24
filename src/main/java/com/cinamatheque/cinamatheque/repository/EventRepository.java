package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Event;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository
        extends MongoRepository<Event, String > {
}
