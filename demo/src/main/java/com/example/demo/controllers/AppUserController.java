package com.example.demo.controllers;

import com.example.demo.entities.AppUser;
import com.example.demo.services.AppUserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class AppUserController {

    private final AppUserServices appUserServices;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    public AppUserController(AppUserServices appUserServices) {
        this.appUserServices = appUserServices;
    }

    @GetMapping(path="users")
    public List<AppUser> getUsers() {
        return appUserServices.getUsers();
    }

    @GetMapping(path="user/{username}")
    public AppUser getUser(@PathVariable("username") String username) {
        return appUserServices.getUser(username);
    }

    @PostMapping(path="register")
    public void registerNewUser(@RequestBody AppUser user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        appUserServices.addNewUser(user);
    }

    @DeleteMapping(path = "{username}")
    public void deleteUser(@PathVariable("username") String username) {
        appUserServices.deleteUser(username);
    }

    @PutMapping(path = "{username}")
    public void updateUser(
            @PathVariable("username") String username,
            @RequestBody AppUser user) {
        System.out.println(user);
        appUserServices.updateUser(username, user);
    }

    @PutMapping(path="{follower}/follow/{following}")
    public void follow(
            @PathVariable("follower") String follower,
            @PathVariable("following") String following) {
        appUserServices.follow(follower, following);
    }

    @PutMapping(path="{follower}/unfollow/{following}")
    public void unfollow(
            @PathVariable("follower") String follower,
            @PathVariable("following") String following) {
        appUserServices.unfollow(follower, following);
    }
}
