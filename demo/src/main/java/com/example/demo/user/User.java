package com.example.demo.user;

import java.time.LocalDate;

public class User {
    private Long userId;
    private String username;
    private String email;
    private String password;
    private String bio;
    private LocalDate dateOfRegistration;

    public User() {
    }

    // Constructor with all parameters
    public User(Long userId,
                String username,
                String email,
                String password,
                String bio,
                LocalDate dateOfRegistration) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.bio = bio;
        this.dateOfRegistration = dateOfRegistration;
    }

    // Constructor without the userId
    public User(String username,
                String email,
                String password,
                String bio,
                LocalDate dateOfRegistration) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.bio = bio;
        this.dateOfRegistration = dateOfRegistration;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public LocalDate getDateOfRegistration() {
        return dateOfRegistration;
    }

    public void setDateOfRegistration(LocalDate dateOfRegistration) {
        this.dateOfRegistration = dateOfRegistration;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", bio='" + bio + '\'' +
                ", dateOfRegistration=" + dateOfRegistration +
                '}';
    }
}

