package com.example.demo.entities;

import com.vladmihalcea.hibernate.type.array.ListArrayType;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Lob;
import javax.persistence.Table;
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
    @Convert(converter = ImageListConverter.class)
    private List<Image> images;

    public Post() {}

    public Post(
            String username,
            Long timestamp,
            String text,
            List<Image> images
    ) {
        this.username = username;
        this.timestamp = timestamp;
        this.text = text;
        this.images = images;
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

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    @Override
    public int compareTo(Post p) {
        return getTimestamp().compareTo(p.getTimestamp());
    }

    @Override
    public String toString() {
        return "Post {" +
                "username='" + username + '\'' +
                ", timestamp='" + timestamp + '\'' +
                ", text='" + text + '\'' +
                ", images='" + images +
                '}';
    }


}
