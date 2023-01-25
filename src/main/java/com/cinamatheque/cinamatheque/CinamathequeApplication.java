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
	@Bean
	CommandLineRunner runner(FilmRepository filmRepository){
		return args -> {
			Film film = new Film(
					"avenger",
					new Date(),
					"Photo",
					"2.0"

			);
			filmRepository.insert(film);
		};
	}

	@Bean
	CommandLineRunner runnerRealisateur(RealisateurRepository realisateurRepository){
		return args -> {

			Realisateur realisateur = new Realisateur(
					"ronaldo",
					 "patrick",
					 String.valueOf(new Date()),
					 "Français",
					 "beau film à voir"

			);
			realisateurRepository.insert(realisateur);
		};
	}
}
