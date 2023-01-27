package com.cinamatheque.cinamatheque;

import com.cinamatheque.cinamatheque.model.Film;
import com.cinamatheque.cinamatheque.model.Realisateur;
import com.cinamatheque.cinamatheque.repository.FilmRepository;
import com.cinamatheque.cinamatheque.repository.RealisateurRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


import java.util.Date;

@SpringBootApplication
public class CinamathequeApplication {

	public static void main(String[] args) {

		SpringApplication.run(CinamathequeApplication.class, args);
	}

}
