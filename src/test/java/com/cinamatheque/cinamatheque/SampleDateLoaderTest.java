package com.cinamatheque.cinamatheque;

import com.cinamatheque.cinamatheque.model.Acteur;
import com.cinamatheque.cinamatheque.repository.ActeurRepository;
import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Component
public class SampleDateLoaderTest implements CommandLineRunner {
    private final ActeurRepository acteurRepository;
    private final Faker faker;
    Acteur acteur = new Acteur();

    public SampleDateLoaderTest(ActeurRepository acteurRepository) {
        this.acteurRepository = acteurRepository;
        this.faker = new Faker();
    }

    public void run (String[] args){

        List<Acteur> actor = IntStream.rangeClosed(1,10)
                .mapToObj(i -> new Acteur(
                        faker.name().firstName(),
                        faker.name().lastName(),
                        faker.lorem().characters(),
                        faker.lorem().paragraph(),
                        faker.lorem().paragraph()
                )).collect(Collectors.toList());


        acteurRepository.saveAll(actor);
    }
}
