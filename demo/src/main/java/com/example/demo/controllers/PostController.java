package com.example.demo.controllers;

import com.example.demo.entities.Post;
import com.example.demo.entities.Image;
import com.example.demo.services.PostServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;
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
    public void createNewPost(
            @RequestParam String username,
            @RequestParam Long timestamp,
            @RequestParam String text,
            @RequestParam MultipartFile[] files
    ) throws IOException {
        Post post = new Post();
        List<Image> images = new java.util.ArrayList<>(Collections.emptyList());
        post.setUsername(username);
        post.setTimestamp(timestamp);
        post.setText(text);
        for (MultipartFile file : files) {
            Image image = new Image();
            image.setName(file.getName());
            image.setContent(file.getBytes());
            images.add(image);
        }
        post.setImages(images);
        System.out.println(post);
        postServices.addNewPost(post);
    }

}
