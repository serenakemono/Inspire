package com.example.demo.controllers;

import com.example.demo.entities.AppUser;
import com.example.demo.entities.Post;
import com.example.demo.entities.Image;
import com.example.demo.entities.Tag;
import com.example.demo.services.AppUserServices;
import com.example.demo.services.PostServices;
import com.example.demo.services.TagServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    private final PostServices postServices;
    private final TagServices tagServices;
    private final AppUserServices appUserServices;

    @Autowired
    public PostController(
            PostServices postServices,
            TagServices tagServices,
            AppUserServices appUserServices) {
        this.postServices = postServices;
        this.tagServices = tagServices;
        this.appUserServices = appUserServices;
    }

    @GetMapping(path="/posts")
    public List<Post> getPosts() {
        return postServices.getPosts();
    }

    @GetMapping(path="{username}/posts")
    public List<Post> getPostsByUsername(@PathVariable("username") String username) {
        return postServices.getPostsByUsername(username);
    }

    @PostMapping(path="/post")
    public void createNewPost(
            @RequestParam String username,
            @RequestParam Long timestamp,
            @RequestParam String text,
            @RequestParam (required=false) List<String> tagnames,
            @RequestParam(required = false) MultipartFile file
    ) throws IOException {
        Post post = new Post();
        AppUser appUser = appUserServices.getUser(username);
        post.setAppUser(appUser);
        post.setUsername(appUser.getUsername());
        post.setTimestamp(timestamp);
        post.setText(text);
        if (file!=null) {
            post.setImage(file.getBytes());
        }
        Long postId = postServices.addNewPost(post);
        if (tagnames.size() != 0) {
            List<Tag> tags = tagServices.addPostToTags(tagnames, postId);
            postServices.setTags(tags, postId);
        }
    }

    @PutMapping(path="/{username}/like/post/{id}")
    public void likePost(
            @PathVariable("username") String username, @PathVariable("id") Long id) {
        System.out.println("user " + username + "liked post " + id);
        postServices.likePost(username, id);
    }

    @PutMapping(path="/{username}/unlike/post/{id}")
    public void unlikePost(
            @PathVariable("username") String username, @PathVariable("id") Long id) {
        postServices.unlikePost(username, id);
    }

    @GetMapping(path="/posts/following")
    public List<Post> getPostsFromFollowing(@RequestParam List<String> following) {
        return postServices.getPostsFromFollowing(following);
    }
}
