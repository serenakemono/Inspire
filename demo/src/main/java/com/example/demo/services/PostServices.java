package com.example.demo.services;

import com.example.demo.entities.AppUser;
import com.example.demo.entities.Post;
import com.example.demo.repositories.AppUserRepository;
import com.example.demo.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class PostServices {
    @Autowired
    private final PostRepository postRepository;

    @Autowired
    public PostServices(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getPostsByUsername(String username) {
        List<Post> posts = postRepository.findAllByUsername(username);
        return posts;
    }

    public void addNewPost(Post post) {
        postRepository.save(post);
    }

    public List<Post> getPosts() {
        return postRepository.findAll();
    }
}
