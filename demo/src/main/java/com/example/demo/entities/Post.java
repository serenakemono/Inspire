package com.example.demo.entities;

import com.example.demo.serializers.CustomAppUserSetSerializer;
import com.example.demo.serializers.CustomAppUserSerializer;
import com.example.demo.serializers.CustomTagListSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.util.Arrays;
import java.util.List;
import java.util.Set;

@Entity
@Table
public class Post implements Comparable<Post> {

    @Id
    @SequenceGenerator(
            name = "post_sequence",
            sequenceName = "post_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "post_sequence"
    )
    private Long id;
    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    @JsonSerialize(using = CustomAppUserSerializer.class)
    private AppUser appUser;
    @Column
    private String username;
    @Column
    private Long timestamp;
    @Column
    private String text;

    @Column
    private byte[] image;

    @Column
    @ManyToMany
    @JoinTable(
            name = "post_tags",
            joinColumns = @JoinColumn(name = "id"),
            inverseJoinColumns = @JoinColumn(name = "tagname")
    )
    @JsonSerialize(using = CustomTagListSerializer.class)
    private List<Tag> tags;

    @Column
    @ManyToMany
    @JoinTable(
            name = "post_likers",
            joinColumns = @JoinColumn(name = "id"),
            inverseJoinColumns = @JoinColumn(name = "username")
    )
    @JsonSerialize(using = CustomAppUserSetSerializer.class)
    private Set<AppUser> likers;

    public Post() {}

    public Post(
            Long id,
            AppUser appUser,
            Long timestamp,
            String text,
            byte[] image
    ) {
        this.id = id;
        this.appUser = appUser;
        this.username = appUser.getUsername();
        this.timestamp = timestamp;
        this.text = text;
        this.image = image;
    }

    public Post(
            AppUser appUser,
            Long timestamp,
            String text,
            byte[] image
    ) {
        this.appUser = appUser;
        this.username = appUser.getUsername();
        this.timestamp = timestamp;
        this.text = text;
        this.image = image;
    }

    public Post(
            AppUser appUser,
            Long timestamp,
            String text
    ) {
        this.appUser = appUser;
        this.username = appUser.getUsername();
        this.timestamp = timestamp;
        this.text = text;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Long timestamp) {
        this.timestamp = timestamp;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public List<Tag> getTags() {
        return tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }

    public Set<AppUser> getLikers() {
        return likers;
    }

    public void setLikers(Set<AppUser> likers) {
        this.likers = likers;
    }

    public void addLiker(AppUser appUser) {
        this.likers.add(appUser);
    }

    public void removeLiker(AppUser appUser) {
        this.likers.remove(appUser);
    }

    @Override
    public int compareTo(Post p) {
        return getTimestamp().compareTo(p.getTimestamp());
    }

    @Override
    public String toString() {
        String imageToString = image != null ? Arrays.toString(image) : "";
        StringBuilder tagnames = new StringBuilder();
        for (Tag tag : tags) {
            tagnames.append(" '").append(tag.getTagname()).append("'");
        }
        return "Post {" +
                "id='" + id + '\'' +
                "username='" + appUser.getUsername() + '\'' +
                ", timestamp='" + timestamp + '\'' +
                ", text='" + text + '\'' +
                ", image='" + "image string" + '\'' +
                ", tags='" + tagnames + '\'' +
                '}';
    }
}
