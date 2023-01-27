package com.cinamatheque.cinamatheque.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/post")
@CrossOrigin(origins = "http://localhost:8080")
public class PostController {
    @GetMapping("/")
    public ResponseEntity<String> getPosts(){
        return ResponseEntity.ok("These are all the posts");
    }
}
