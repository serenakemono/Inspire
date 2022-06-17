package com.example.demo.services;

import com.example.demo.entities.Post;
import com.example.demo.entities.Tag;
import com.example.demo.repositories.PostRepository;
import com.example.demo.repositories.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TagServices {
    @Autowired
    private final TagRepository tagRepository;
    private final PostRepository postRepository;

    @Autowired
    public TagServices(TagRepository tagRepository, PostRepository postRepository) {
        this.tagRepository = tagRepository;
        this.postRepository = postRepository;
    }

    public Optional<Tag> getTagByTagname(String tagname) {
       Optional<Tag> tag = tagRepository.findById(tagname);
        return tag;
    }

    public void addNewTag(Tag tag) {
        tagRepository.save(tag);
    }

    public List<Tag> getTags() {
        return tagRepository.findAll();
    }

    private Tag addPostToTag(String tagname, Long postId) {
        Optional<Tag> tagOptional = tagRepository.findById(tagname);
        if (tagOptional.isPresent()) {
            Tag tag = tagOptional.get();
            List<Post> posts = tag.getPosts();
            posts.add(postRepository.getById(postId));
            tag.setPosts(posts);
            return tag;
        } else {
            List<Post> posts = new ArrayList<>();
            posts.add(postRepository.getById(postId));
            Tag tag = new Tag(tagname, posts);
            this.addNewTag(tag);
            return tag;
        }
    }

    @Transactional
    public List<Tag> addPostToTags(List<String> tagnames, Long postId) {
        List<Tag> tags = new ArrayList<>();
        for (String tagname : tagnames) {
            Tag tag = this.addPostToTag(tagname, postId);
            tags.add(tag);
        }
        return tags;
    }

    public List<Tag> listAll(String keyword) {
        if (keyword != null) {
            return tagRepository.search(keyword);
        }
        return new ArrayList<>();
    }
}
