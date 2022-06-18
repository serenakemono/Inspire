package com.example.demo.services;

import com.example.demo.entities.AppUser;
import com.example.demo.entities.Authority;
import com.example.demo.repositories.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class AppUserServices implements UserDetailsService {

    @Autowired
    private final AppUserRepository userRepo;

    @Autowired
    public AppUserServices(AppUserRepository appUserRepository) {
        this.userRepo = appUserRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<AppUser> user = userRepo.findAppUserByUsername(username);
        if (user.isEmpty()) {
            throw new UsernameNotFoundException("User not found");
        }
        return user.get();
    }

    public List<AppUser> getUsers() {
        return userRepo.findAll();
    }

    public void addNewUser(AppUser user) {

        Optional<AppUser> userByEmail =
                userRepo.findAppUserByEmail(user.getEmail());
        if (userByEmail.isPresent()) {
            throw new IllegalStateException("This email has been taken.");
        }

        Optional<AppUser> userByUsername =
                userRepo.findAppUserByUsername(user.getUsername());
        if (userByUsername.isPresent()) {
            throw new IllegalStateException("This username has been taken.");
        }

        List<Authority> authorityList = new ArrayList<>();
        authorityList.add(createAuthority("USER", "User role"));
        user.setAuthorities(authorityList);

        userRepo.save(user);
    }

    private Authority createAuthority(String roleCode, String roleDescription) {
        Authority authority = new Authority();
        authority.setRoleCode(roleCode);
        authority.setRoleDescription(roleDescription);
        return authority;
    }

    public void deleteUser(String username) {
        Optional<AppUser> userByUsername =
                userRepo.findAppUserByUsername(username);
        boolean exists = userByUsername.isPresent();
        if (!exists) {
            throw new IllegalStateException(
                    "User with username " + username + " does not exist.");
        }
        userRepo.deleteById(username);
    }

    // use setter methods instead of db logic
    @Transactional
    public void updateUser(String username, AppUser updatedUser) {

        String newUsername = updatedUser.getUsername();
        String email = updatedUser.getEmail();
        String password = updatedUser.getPassword();
        String bio = updatedUser.getBio();

        AppUser user = userRepo.findAppUserByUsername(username).
                orElseThrow(() -> new IllegalStateException(
                        "User with username " + username + " does not exist."
                ));

        if (newUsername != null &&
                newUsername.length() > 0 &&
                !Objects.equals(user.getUsername(), newUsername)) {
            Optional<AppUser> userOptional =
                    userRepo.findAppUserByUsername(newUsername);
            if (userOptional.isPresent()) {
                throw new IllegalStateException("This username has been taken");
            }
            user.setUsername(newUsername);
        }

        if (email != null &&
                email.length() > 0 &&
                !Objects.equals(user.getEmail(), email)) {
            Optional<AppUser> userOptional =
                    userRepo.findAppUserByEmail(email);
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

    public AppUser getUser(String username) {
        Optional<AppUser> userOptional = userRepo.findAppUserByUsername(username);
        if (userOptional.isEmpty()) {
            throw new IllegalStateException("User with username " + username + " does not exist.");
        }
        return userOptional.get();
    }
}
