package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Exchange;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ExchangeRepository extends MongoRepository<Exchange, String> {

}
