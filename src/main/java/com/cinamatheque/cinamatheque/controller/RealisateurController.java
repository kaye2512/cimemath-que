package com.cinamatheque.cinamatheque.controller;

import com.cinamatheque.cinamatheque.model.Realisateur;
import com.cinamatheque.cinamatheque.repository.RealisateurRepository;
import com.cinamatheque.cinamatheque.service.RealisateurService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="/api/v1/realisateurs")
@AllArgsConstructor
public class RealisateurController {

    private final RealisateurRepository realisateurRepository;
    @GetMapping
    public List<Realisateur> getRealisateurs(){
        return realisateurRepository.findAll();
    }
}
