package com.example.demo.services;

import com.example.demo.entities.Tag;
import com.example.demo.repositories.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TagServices {
    @Autowired
    private final TagRepository tagRepository;

    @Autowired
    public TagServices(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
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
}
