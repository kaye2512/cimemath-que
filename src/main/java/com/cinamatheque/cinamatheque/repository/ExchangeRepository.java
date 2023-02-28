package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Exchange;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExchangeRepository extends MongoRepository<Exchange, String> {

}
