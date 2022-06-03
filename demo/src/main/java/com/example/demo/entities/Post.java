package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table
@IdClass(PostId.class)
public class Post implements Comparable<Post> {

    @Id
    private String username;
    @Id
    private Long timestamp;
    @Column
    private String text;

    public Post() {}

    public Post(
            String username,
            Long timestamp,
            String text) {
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

    @Override
    public int compareTo(Post p) {
        return getTimestamp().compareTo(p.getTimestamp());
    }

    @Override
    public String toString() {
        return "Post {" +
                "username='" + username + '\'' +
                ", timestamp='" + timestamp + '\'' +
                ", text='" + text +
                '}';
    }


}
