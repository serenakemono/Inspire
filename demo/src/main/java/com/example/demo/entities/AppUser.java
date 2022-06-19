package com.example.demo.entities;

import com.example.demo.serializers.CustomAppUserSetSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Entity
@Table
public class AppUser implements UserDetails {
    @Id
    private String username;

    @Column(unique = true)
    private String email;
    private String password;
    private String bio;
    private Long timestampForRegistration;
    private boolean enabled = true;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "auth_user_authority",
            joinColumns = @JoinColumn(referencedColumnName = "username"),
            inverseJoinColumns = @JoinColumn(referencedColumnName = "id")
    )
    private List<Authority> authorities;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "user_followers",
            joinColumns = @JoinColumn(referencedColumnName = "username"),
            inverseJoinColumns = @JoinColumn(referencedColumnName = "username")
    )
    @JsonSerialize(using = CustomAppUserSetSerializer.class)
    private Set<AppUser> followers;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "user_following",
            joinColumns = @JoinColumn(referencedColumnName = "username"),
            inverseJoinColumns = @JoinColumn(referencedColumnName = "username")
    )
    @JsonSerialize(using = CustomAppUserSetSerializer.class)
    private Set<AppUser> following;

    @OneToMany(mappedBy = "appUser", cascade = CascadeType.ALL)
    private Set<Post> posts;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "liked_posts",
            joinColumns = @JoinColumn(referencedColumnName = "username"),
            inverseJoinColumns = @JoinColumn(referencedColumnName = "id")
    )
    private Set<Post> likedPosts;

    public void setAuthorities(List<Authority> authorities) {
        this.authorities = authorities;
    }

    public AppUser() {
    }

    // Constructor with all parameters
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

    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.enabled;
    }

    @Override
    public boolean isAccountNonLocked() {
        return this.enabled;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return this.enabled;
    }

    @Override
    public boolean isEnabled() {
        return this.enabled;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getBio() {
        return this.bio;
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


    public void setEnabled(boolean b) {
        this.enabled = b;
    }

    public void setTimestampForRegistration(Long timestampForRegistration) {
        this.timestampForRegistration = timestampForRegistration;
    }

    public Set<AppUser> getFollowers() {
        return followers;
    }

    public void setFollowers(Set<AppUser> followers) {
        this.followers = followers;
    }

    public Set<AppUser> getFollowing() {
        return following;
    }

    public void setFollowing(Set<AppUser> following) {
        this.following = following;
    }

    public void addFollower(AppUser follower) {
        this.followers.add(follower);
    }

    public void addFollowing(AppUser following) {
        this.following.add(following);
    }

    public void removeFollower(AppUser follower) {
        this.followers.remove(follower);
    }

    public void removeFollowing(AppUser following) {
        this.following.remove(following);
    }

    public Set<Post> getPosts() {
        return posts;
    }

    public void setPosts(Set<Post> posts) {
        this.posts = posts;
    }

    public void addPost(Post post) {
        this.posts.add(post);
    }

    public void removePost(Post post) {
        this.posts.remove(post);
    }

    public Set<Post> getLikedPosts() {
        return likedPosts;
    }

    public void setLikedPosts(Set<Post> likedPosts) {
        this.likedPosts = likedPosts;
    }

    public void addLikedPost(Post post) {
        this.likedPosts.add(post);
    }

    public void removeLikedPost(Post post) {
        this.likedPosts.remove(post);
    }

    @Override
    public String toString() {
        return "User {" +
                "username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", bio='" + bio + '\'' +
                ", timestampForRegistration=" + timestampForRegistration +
                '}';
    }
}

