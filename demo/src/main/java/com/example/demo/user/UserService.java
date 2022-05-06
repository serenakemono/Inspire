package com.example.demo.user;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Service
public class UserService {

    public List<EndUser> getUsers() {
        return List.of(
                new EndUser(
                        1L,
                        "serenakemono",
                        "siriuswusss@gmail.com",
                        "T0077841e",
                        "Get Inspired!",
                        LocalDate.of(2022, Month.MAY, 6)
                )
        );
    }
}
