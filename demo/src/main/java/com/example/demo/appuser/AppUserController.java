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
@RequestMapping(path = "api/v1/user")
@CrossOrigin(origins = "http://localhost:3000")
public class AppUserController {

    private final AppUserService appUserService;

    @Autowired
    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @GetMapping
    public List<AppUser> getUsers() {
        return appUserService.getUsers();
    }

    @PostMapping
    public void registerNewUser(@RequestBody Object user) {

        String email = user.get('email');

        System.out.println(user);
        AppUser oneUser = new AppUser();
        System.out.println(oneUser);
        //appUserService.addNewUser(user);
    }

    @DeleteMapping(path = "{userId}")
    public void deleteUser(@PathVariable("userId") Long userId) {
        appUserService.deleteUser(userId);
    }

    @PutMapping(path = "{userId}")
    public void updateUser(
            @PathVariable("userId") Long userId,
            @RequestParam(required = false) String username,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String password,
            @RequestParam(required = false) String bio) {
        appUserService.updateUser(userId, username, email, password, bio);
    }
}
