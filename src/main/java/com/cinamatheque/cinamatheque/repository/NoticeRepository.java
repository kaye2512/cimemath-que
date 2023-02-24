package com.cinamatheque.cinamatheque.repository;

import com.cinamatheque.cinamatheque.model.Notice;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoticeRepository extends MongoRepository<Notice, String> {

}
