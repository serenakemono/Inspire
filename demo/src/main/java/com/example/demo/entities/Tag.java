package com.example.demo.entities;

import com.example.demo.serializers.CustomAppUserSetSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.List;
import java.util.Set;

@Entity
@Table
public class Tag implements Comparable<Tag> {
    @Id
    private String tagname;

    @Column
    @ManyToMany(mappedBy = "tags")
    private List<Post> posts;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "tag_followers",
            joinColumns = @JoinColumn(referencedColumnName = "tagname"),
            inverseJoinColumns = @JoinColumn(referencedColumnName = "username")
    )
    @JsonSerialize(using = CustomAppUserSetSerializer.class)
    private Set<AppUser> tagFollowers;

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

    public Set<AppUser> getTagFollowers() {
        return tagFollowers;
    }

    public void setTagFollowers(Set<AppUser> tagFollowers) {
        this.tagFollowers = tagFollowers;
    }

    public void addTagFollower(AppUser appUser) {
        this.tagFollowers.add(appUser);
    }

    public void removeTagFollower(AppUser appUser) {
        this.tagFollowers.remove(appUser);
    }

    @Override
    public int compareTo(Tag t) {
        return getTagname().compareTo(t.getTagname());
    }

    @Override
    public String toString() {
        return "Tag {" +
                "tagname='" + tagname + '\'' +
                "posts='" + posts + '\'' +
                '}';
    }
}
