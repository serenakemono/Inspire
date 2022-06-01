package com.example.demo.entities;

import java.io.Serializable;
import java.util.Objects;

public class PostId implements Serializable {
    private String username;
    private Long timestamp;

    public PostId(String username, Long timestamp) {
        this.username = username;
        this.timestamp = timestamp;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PostId postId = (PostId) o;
        return Objects.equals(username, postId.username) && Objects.equals(timestamp, postId.timestamp);
    }

    @Override
    public int hashCode() {
        return Objects.hash(username, timestamp);
    }
}
