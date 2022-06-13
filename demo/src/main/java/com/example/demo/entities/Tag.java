package com.example.demo.entities;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table
public class Tag {
    @Id
    private String tagname;

    @Column
    @ManyToMany(mappedBy = "tags")
    private List<Post> posts;

    public Tag() {}

    public Tag(String tagname, List<Post> posts) {
        this.tagname = tagname;
        this.posts = posts;
    }

    public String getTagname() {
        return tagname;
    }

    public void setTagname(String tagname) {
        this.tagname = tagname;
    }

    public List<Post> getPosts() {
        return posts;
    }

    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }

    public void addPost(Post post) {
        this.posts.add(post);
    }

    @Override
    public String toString() {
        return "Tag {" +
                "tagname='" + tagname + '\'' +
                "posts='" + posts + '\'' +
                '}';
    }
}