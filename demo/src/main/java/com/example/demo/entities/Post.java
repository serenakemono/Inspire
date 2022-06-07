package com.example.demo.entities;

import com.vladmihalcea.hibernate.type.array.ListArrayType;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.Arrays;
import java.util.List;

@Entity
@Table
@IdClass(PostId.class)
@TypeDef(name = "list-array", typeClass = ListArrayType.class)
    public class Post implements Comparable<Post> {

    @Id
    private String username;
    @Id
    private Long timestamp;
    @Column
    private String text;

    @Column
    private byte[] image;

    @Column
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "post_tags")
    private List<Tag> tags;

    public Post() {}

    public Post(
            String username,
            Long timestamp,
            String text,
            byte[] image
    ) {
        this.username = username;
        this.timestamp = timestamp;
        this.text = text;
        this.image = image;
    }

    public Post(
            String username,
            Long timestamp,
            String text
    ) {
        this.username = username;
        this.timestamp = timestamp;
        this.text = text;
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

    @Override
    public int compareTo(Post p) {
        return getTimestamp().compareTo(p.getTimestamp());
    }

    @Override
    public String toString() {
        String imageToString = image != null ? Arrays.toString(image) : "";
        return "Post {" +
                "username='" + username + '\'' +
                ", timestamp='" + timestamp + '\'' +
                ", text='" + text + '\'' +
                ", image='" + imageToString + '\'' +
                ", tags='" + tags + '\'' +
                '}';
    }


}
