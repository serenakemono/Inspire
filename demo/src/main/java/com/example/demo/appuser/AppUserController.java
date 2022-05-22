package com.example.demo.appuser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class AppUserController {

    private final AppUserService appUserService;

    @Autowired
    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @GetMapping(path="users")
    public List<AppUser> getUsers() {
        return appUserService.getUsers();
    }

    @PostMapping(path="register")
    public void registerNewUser(@RequestBody AppUser user) {
        appUserService.addNewUser(user);
        System.out.println(user);
    }

    @DeleteMapping(path = "{username}")
    public void deleteUser(@PathVariable("username") String username) {
        appUserService.deleteUser(username);
    }

    @PutMapping(path = "{username}")
    public void updateUser(
            @PathVariable("username") String username,
            @RequestParam(required = false) String newUsername,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String password,
            @RequestParam(required = false) String bio) {
        appUserService.updateUser(username, newUsername, email, password, bio);
    }
}
