package com.cinamatheque.cinamatheque.service;

import com.cinamatheque.cinamatheque.model.Realisateur;
import com.cinamatheque.cinamatheque.repository.RealisateurRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@AllArgsConstructor
@Service
public class RealisateurService {
    private final RealisateurRepository realisateurRepository;

}
