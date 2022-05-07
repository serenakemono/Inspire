package com.example.demo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<AppUser> getUsers() {
        return userRepository.findAll();
    }

    public void addNewUser(AppUser user) {

        Optional<AppUser> userByEmail =
                userRepository.findAppUserByEmail(user.getEmail());
        if (userByEmail.isPresent()) {
            throw new IllegalStateException("This email has been taken.");
        }

        Optional<AppUser> userByUsername =
                userRepository.findAppUserByUsername(user.getUsername());
        if (userByUsername.isPresent()) {
            throw new IllegalStateException("This username has been taken.");
        }

        userRepository.save(user);
    }
}
