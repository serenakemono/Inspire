package com.example.demo.entities;

import com.example.demo.serializers.CustomAppUserSetSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.imageio.ImageIO;
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
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
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
    private byte[] dp;

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

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "collected_posts",
            joinColumns = @JoinColumn(referencedColumnName = "username"),
            inverseJoinColumns = @JoinColumn(referencedColumnName = "id")
    )
    private Set<Post> collectedPosts;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "followed_tags",
            joinColumns = @JoinColumn(referencedColumnName = "username"),
            inverseJoinColumns = @JoinColumn(referencedColumnName = "tagname")
    )
    private Set<Tag> followedTags;

    public void setAuthorities(List<Authority> authorities) {
        this.authorities = authorities;
    }

    public AppUser() throws IOException {
    }

    // Constructor with all parameters
    public AppUser(String username,
                   String email,
                   String password,
                   String bio,
                   Long timestampForRegistration,
                   byte[] dp
    ) throws IOException {
        this.username = username;
        this.email = email;
        this.password = password;
        this.bio = bio;
        this.timestampForRegistration = timestampForRegistration;
        this.dp = dp;
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

    public byte[] getDp() {
        return dp;
    }

    public void setDp(byte[] dp) {
        this.dp = dp;
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

    public Set<Post> getCollectedPosts() {
        return collectedPosts;
    }

    public void setCollectedPosts(Set<Post> collectedPosts) {
        this.collectedPosts = collectedPosts;
    }

    public void addCollectedPost(Post post) {
        this.collectedPosts.add(post);
    }

    public void removeCollectedPost(Post post) {
        this.collectedPosts.remove(post);
    }

    public Set<Tag> getFollowedTags() {
        return followedTags;
    }

    public void setFollowedTags(Set<Tag> followedTags) {
        this.followedTags = followedTags;
    }

    public void addFollowedTag(Tag tag) {
        this.followedTags.add(tag);
    }

    public void removeFollowedTag(Tag tag) {
        this.followedTags.remove(tag);
    }

    private byte[] convertImageToByteArray(String filepath) throws IOException {
        BufferedImage bImage = ImageIO.read(new File(filepath));
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ImageIO.write(bImage, "jpg", bos);
        return bos.toByteArray();
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

