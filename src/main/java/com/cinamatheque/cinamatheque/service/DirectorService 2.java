package com.cinamatheque.cinamatheque.service;

import com.cinamatheque.cinamatheque.repository.DirectorRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class DirectorService {
    private final DirectorRepository directorRepository;

}
