package com.example.demo.appuser;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppUserConfig {

    @Bean
    CommandLineRunner commandLineRunner(
            AppUserRepository repo) {
        return args -> {

            //repo.save(oneuser);
        };
    }
}
