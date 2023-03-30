package com.cinamatheque.cinamatheque.controller;

import com.cinamatheque.cinamatheque.model.Director;
import com.cinamatheque.cinamatheque.repository.DirectorRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/api/v1/director")
@CrossOrigin(origins = "*")
public class DirectorController {

    @Autowired
    private  DirectorRepository directorRepository;
    @GetMapping
    public List<Director> getDirectors(){
        return directorRepository.findAll();
    }

}
