package com.cinamatheque.cinamatheque.controller;

import com.cinamatheque.cinamatheque.model.Acteur;
import com.cinamatheque.cinamatheque.service.ActeurService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/acteur")
@AllArgsConstructor
public class ActeurController {
    @Autowired
    private ActeurService service;
    @PostMapping
    public Acteur CreateActeur (@RequestBody Acteur acteur){
        return service.addActeur(acteur);
    }
    @GetMapping
    public List<Acteur> getActeur() {
        return service.findAllActeur();
    }

}
