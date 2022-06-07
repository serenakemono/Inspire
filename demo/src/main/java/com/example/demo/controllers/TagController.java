package com.example.demo.controllers;

import com.example.demo.entities.Post;
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

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class TagController {

    private final TagServices tagServices;

    @Autowired
    public TagController(TagServices tagServices) {
        this.tagServices = tagServices;
    }

    @GetMapping(path="/tags")
    public List<Tag> getTags() {
        return tagServices.getTags();
    }

    @GetMapping(path="/tag/{tag}")
    public Tag getTag(@PathVariable("tag") String tagname) {
        Optional<Tag> tag = tagServices.getTagByTagname(tagname);
        if (tag.isEmpty()) {
            return new Tag("");
        }
        return tag.get();
    }

    @PostMapping(path="/tag")
    public void addTag(@RequestParam String tagname) {
        Optional<Tag> tag = tagServices.getTagByTagname(tagname);
        if (tag.isEmpty()) {
            tagServices.addNewTag(new Tag(tagname));
        }
    }
}
