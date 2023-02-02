package com.cinamatheque.cinamatheque.controller;

import com.cinamatheque.cinamatheque.model.Acteur;
import com.cinamatheque.cinamatheque.repository.ActeurRepository;
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
    private ActeurRepository repository;
    @PostMapping
    public Acteur CreateActeur (@RequestBody Acteur acteur){
        return service.addActeur(acteur);
    }
    @GetMapping
    public List<Acteur> getActeur() {
        return repository.findAll();
    }
    @GetMapping("/{id}")
    public Acteur getActeurById(@PathVariable String id){
        return repository.findById(id).get();
    }
    @GetMapping("/firstname/{firstname}")
    public List<Acteur> getActeurByFirstname(@PathVariable String firstname){
        return repository.findByFirstname(firstname);
    }
    @GetMapping("/lastname/{lastname}")
    public List<Acteur> getActeurByLastname(@PathVariable String lastname){
        return repository.findByLastname(lastname);
    }
    @PutMapping
    public Acteur modifyActeur(@RequestBody Acteur acteur){
        return service.updateActeur(acteur);
    }

    @DeleteMapping("/{id}")
    public String removeActeur(@PathVariable String id){
        return service.deletingActeur(id);
    }
}
