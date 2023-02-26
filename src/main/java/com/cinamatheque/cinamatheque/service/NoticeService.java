package com.cinamatheque.cinamatheque.service;


import com.cinamatheque.cinamatheque.model.Film;
import com.cinamatheque.cinamatheque.model.Notice;
import com.cinamatheque.cinamatheque.repository.NoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class NoticeService {

    @Autowired
    public NoticeRepository noticeRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Notice createNotice(String noticeTitle, String filmId){
        Notice notice = noticeRepository.insert(new Notice(noticeTitle));

        // perform update o moving class
        // because noticeId are empty
        // perform matching on with moving we are updating id matching the id
        // we are receive from the user
        mongoTemplate.update(Film.class)
                .matching(Criteria.where("id").is(filmId))
                .apply(new Update().push("noticeId").value(notice))
                .first();
        return notice;
    }
}
