package com.example.demo.controllers;

import com.example.demo.entities.Post;
import com.example.demo.entities.Image;
import com.example.demo.entities.Tag;
import com.example.demo.services.PostServices;
import com.example.demo.services.TagServices;
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
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    private final PostServices postServices;
    private final TagServices tagServices;

    @Autowired
    public PostController(PostServices postServices, TagServices tagServices) {
        this.postServices = postServices;
        this.tagServices = tagServices;
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
            @RequestParam (required=false) List<String> tags,
            @RequestParam(required = false) MultipartFile file
    ) throws IOException {
        Post post = new Post();
        post.setUsername(username);
        post.setTimestamp(timestamp);
        post.setText(text);
        if (file!=null) {
            post.setImage(file.getBytes());
        }
        List<Tag> postTags = new ArrayList<>(Collections.emptyList());
        if (tags.size()!=0) {
            for (String tag : tags) {
                postTags.add(tagServices.getTagByTagname(tag).get());
            }
        }
        post.setTags(postTags);
        postServices.addNewPost(post);
    }

}
