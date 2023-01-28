package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Event;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EventRepository
        extends MongoRepository<Event, String > {
}
