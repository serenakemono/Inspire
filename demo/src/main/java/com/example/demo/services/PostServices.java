package com.example.demo.services;

import com.example.demo.entities.AppUser;
import com.example.demo.entities.Post;
import com.example.demo.entities.Tag;
import com.example.demo.repositories.AppUserRepository;
import com.example.demo.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class PostServices {
    @Autowired
    private final PostRepository postRepository;
    private final AppUserRepository appUserRepository;

    @Autowired
    public PostServices(PostRepository postRepository, AppUserRepository appUserRepository) {
        this.postRepository = postRepository;
        this.appUserRepository = appUserRepository;
    }

    public List<Post> getPostsByUsername(String username) {
        List<Post> posts = postRepository.findAllByUsername(username);
        Collections.reverse(posts);
        return posts;
    }

    public List<Post> getPostsFromFollowing(List<String> following) {
        List<Post> posts = new ArrayList<>();
        for (String username : following) {
            posts.addAll(postRepository.findAllByUsername(username));
        }
        Collections.sort(posts);
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

    @Transactional
    public void likePost(String username, Long id) {
        AppUser appUser = appUserRepository.getById(username);
        Post post = postRepository.getById(id);
        post.addLiker(appUser);
        appUser.addLikedPost(post);
    }

    @Transactional
    public void unlikePost(String username, Long id) {
        AppUser appUser = appUserRepository.getById(username);
        Post post = postRepository.getById(id);
        post.removeLiker(appUser);
        appUser.removeLikedPost(post);
    }
}
