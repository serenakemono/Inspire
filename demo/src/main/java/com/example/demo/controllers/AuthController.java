package com.example.demo.controllers;

import com.example.demo.requests.AuthRequest;
import com.example.demo.responses.AppUserInfo;
import com.example.demo.responses.LoginResponse;
import com.example.demo.entities.AppUser;
import com.example.demo.config.JWTTokenHelper;
import com.example.demo.services.AppUserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.Principal;

@RestController
@RequestMapping(path = "api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    JWTTokenHelper jwtTokenHelper;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private AppUserServices userServices;

    @PostMapping("/auth/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest)
            throws NoSuchAlgorithmException, InvalidKeyException {

        final Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authRequest.getUsername(), authRequest.getPassword()
                ));

        SecurityContextHolder.getContext().setAuthentication(auth);

        AppUser appUser = (AppUser) auth.getPrincipal();
        String jwtToken = jwtTokenHelper.generateToken(appUser.getUsername());

        LoginResponse response = new LoginResponse();
        response.setToken(jwtToken);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/auth/userinfo")
    public ResponseEntity<?> getUserInfo(Principal user) {
        AppUser userObj = (AppUser) userServices.loadUserByUsername(user.getName());

        AppUserInfo userInfo = new AppUserInfo();
        userInfo.setUsername(userObj.getUsername());
        userInfo.setEmail(userObj.getEmail());
        userInfo.setRoles(userObj.getAuthorities().toArray());

        return ResponseEntity.ok(userInfo);
    }
}
