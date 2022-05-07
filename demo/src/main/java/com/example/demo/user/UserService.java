package com.example.demo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.Objects;
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

    public void deleteUser(Long userId) {
        boolean exists = userRepository.existsById(userId);
        if (!exists) {
            throw new IllegalStateException(
                    "User with id " + userId + " does not exist.");
        }
        userRepository.deleteById(userId);
    }

    // use setter methods instead of db logic
    @Transactional
    public void updateUser(Long userId,
                           String username,
                           String email,
                           String password,
                           String bio) {

        AppUser user = userRepository.findById(userId).
                orElseThrow(() -> new IllegalStateException(
                        "User with id " + userId + " does not exist."
                ));

        if (username != null &&
                username.length() > 0 &&
                !Objects.equals(user.getUsername(), username)) {
            Optional<AppUser> userOptional =
                    userRepository.findAppUserByUsername(username);
            if (userOptional.isPresent()) {
                throw new IllegalStateException("This username has been taken");
            }
            user.setUsername(username);
        }

        if (email != null &&
                email.length() > 0 &&
                !Objects.equals(user.getEmail(), email)) {
            Optional<AppUser> userOptional =
                    userRepository.findAppUserByEmail(email);
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
