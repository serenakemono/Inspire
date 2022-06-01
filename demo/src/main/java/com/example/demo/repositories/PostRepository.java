package com.example.demo.repositories;

import com.example.demo.entities.AppUser;
import com.example.demo.entities.Post;
import com.example.demo.entities.PostId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository
        extends JpaRepository<Post, PostId> {

    List<Post> findAllByUsername(String username);
}
