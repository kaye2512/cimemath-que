package com.cinamatheque.cinamatheque.controller;

import com.cinamatheque.cinamatheque.model.Acteur;
import com.cinamatheque.cinamatheque.repository.ActeurRepository;
import com.cinamatheque.cinamatheque.service.ActeurService;
import com.cronutils.utils.StringUtils;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/acteur")
@AllArgsConstructor
public class ActeurController {

    @Autowired
    private ActeurService acteurService;
    @Autowired
    private ActeurRepository repository;
    // Create actor to populate actor
    // add image actor
    // respect the field name in front application
   @PostMapping
   public Acteur CreateActeur (@RequestParam("file") MultipartFile file,
                              @RequestParam("firstname") String firstname,
                              @RequestParam("lastname") String lastname,
                              @RequestParam("birthdate") String birthdate,
                              @RequestParam("description") String description

   ) throws IOException {
       return acteurService.safeActeur(file, firstname, lastname, birthdate, description);
   }


    //    get actor inside data bas
    @GetMapping
    public List<Acteur> getActeur() {
        return repository.findAll();
    }

    //    get actor by id
    @GetMapping("/{id}")
    public Acteur getActeurById(@PathVariable String id){
        return repository.findById(id).get();
    }
    //    get actor by firstname
    @GetMapping("/firstname/{firstname}")
    public List<Acteur> getActeurByFirstname(@PathVariable String firstname){
        return repository.findByFirstname(firstname);
    }
    //    get actor by lastname
    @GetMapping("/lastname/{lastname}")
    public List<Acteur> getActeurByLastname(@PathVariable String lastname){
        return repository.findByLastname(lastname);
    }

    // modify existing actor inside database
    @PutMapping
    public Acteur modifyActeur(@RequestBody Acteur acteurRequest){
        //get the existing document from DB
        //populate new value from request to existing object/entity/document
        Acteur existingActeur = repository.findById(acteurRequest.getId()).get();
        existingActeur.setFirstname(acteurRequest.getFirstname());
        existingActeur.setLastname(acteurRequest.getLastname());
        existingActeur.setBirthdate(acteurRequest.getBirthdate());
        existingActeur.setDescription(acteurRequest.getDescription());
        return repository.save(existingActeur);
    }
    //deleting actor inside database
    @DeleteMapping("/{id}")
    public String removeActeur(@PathVariable String id){
        repository.deleteById(id);
        return "deleting successfully";
    }

}
