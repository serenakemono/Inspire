package com.example.demo.controllers;

import com.example.demo.entities.AppUser;
import com.example.demo.entities.Post;
import com.example.demo.services.AppUserServices;
import com.example.demo.services.PostServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    private final PostServices postServices;

    @Autowired
    public PostController(PostServices postServices) {
        this.postServices = postServices;
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
    public void createNewPost(@RequestBody Post post) {
        postServices.addNewPost(post);
    }

}
