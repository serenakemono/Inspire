package com.example.demo.appuser;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class AppUser {
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    private Long id;
    @Column(unique = true)
    private String username;
    @Column(unique = true)
    private String email;
    private String password;
    private String bio;
    private Long timestampForRegistration;

    public AppUser() {
    }

    // Constructor with all parameters
    public AppUser(Long id,
                   String username,
                   String email,
                   String password,
                   String bio,
                   Long timestampForRegistration) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.bio = bio;
        this.timestampForRegistration = timestampForRegistration;
    }

    // Constructor without the userId
    public AppUser(String username,
                   String email,
                   String password,
                   String bio,
                   Long timestampForRegistration) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.bio = bio;
        this.timestampForRegistration = timestampForRegistration;
    }

    public Long getId() {
        return id;
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

    public Long getTimestampForRegistration() {
        return timestampForRegistration;
    }

    public void setDateOfRegistration(Long timestampForRegistration) {
        this.timestampForRegistration = timestampForRegistration;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", bio='" + bio + '\'' +
                ", timestampForRegistration=" + timestampForRegistration +
                '}';
    }
}

