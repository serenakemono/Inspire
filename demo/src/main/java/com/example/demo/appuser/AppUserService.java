package com.example.demo.appuser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class AppUserService {

    private final AppUserRepository appUserRepository;

    @Autowired
    public AppUserService(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    public List<AppUser> getUsers() {
        return appUserRepository.findAll();
    }

    public void addNewUser(AppUser user) {

        Optional<AppUser> userByEmail =
                appUserRepository.findAppUserByEmail(user.getEmail());
        if (userByEmail.isPresent()) {
            throw new IllegalStateException("This email has been taken.");
        }

        Optional<AppUser> userByUsername =
                appUserRepository.findAppUserByUsername(user.getUsername());
        if (userByUsername.isPresent()) {
            throw new IllegalStateException("This username has been taken.");
        }

        appUserRepository.save(user);
    }

    public void deleteUser(String username) {
        Optional<AppUser> userByUsername =
                appUserRepository.findAppUserByUsername(username);
        boolean exists = userByUsername.isPresent();
        if (!exists) {
            throw new IllegalStateException(
                    "User with username " + username + " does not exist.");
        }
        appUserRepository.deleteById(username);
    }

    // use setter methods instead of db logic
    @Transactional
    public void updateUser(String username,
                           String newUsername,
                           String email,
                           String password,
                           String bio) {

        AppUser user = appUserRepository.findAppUserByUsername(username).
                orElseThrow(() -> new IllegalStateException(
                        "User with username " + username + " does not exist."
                ));

        if (newUsername != null &&
                newUsername.length() > 0 &&
                !Objects.equals(user.getUsername(), newUsername)) {
            Optional<AppUser> userOptional =
                    appUserRepository.findAppUserByUsername(newUsername);
            if (userOptional.isPresent()) {
                throw new IllegalStateException("This username has been taken");
            }
            user.setUsername(newUsername);
        }

        if (email != null &&
                email.length() > 0 &&
                !Objects.equals(user.getEmail(), email)) {
            Optional<AppUser> userOptional =
                    appUserRepository.findAppUserByEmail(email);
            if (userOptional.isPresent()) {
                throw new IllegalStateException("This email has been taken");
            }
            user.setEmail(email);
        }

        if (password != null &&
                password.length() > 5 &&
                !Objects.equals(user.getPassword(), password)) {
            user.setPassword(password);
        }

        if (bio != null &&
                bio.length() > 0 &&
                !Objects.equals(user.getBio(), bio)) {
            user.setBio(bio);
        }
    }
}
