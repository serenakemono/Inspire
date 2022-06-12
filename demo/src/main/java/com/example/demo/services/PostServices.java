package com.example.demo.services;

import com.example.demo.entities.AppUser;
import com.example.demo.entities.Post;
import com.example.demo.entities.Tag;
import com.example.demo.repositories.AppUserRepository;
import com.example.demo.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.Comparator;
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
        Collections.reverse(posts);
        return posts;
    }

    public Long addNewPost(Post post) {
        Post newPost = postRepository.save(post);
        return newPost.getId();
    }

    @Transactional
    public void setTags(List<Tag> tags, Long postId) {
        Post currPost = postRepository.getById(postId);
        currPost.setTags(tags);
    }

    public List<Post> getPosts() {
        return postRepository.findAll();
    }

    public Post getPostById(Long id) {
        return postRepository.getById(id);
    }
}
