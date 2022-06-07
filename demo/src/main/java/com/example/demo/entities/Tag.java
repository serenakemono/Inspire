package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Tag {
    @Id
    private String tagname;

    public Tag() {}
    public Tag(String tagname) {
        this.tagname = tagname;
    }

    public String getTagname() {
        return tagname;
    }

    public void setTagname(String tagname) {
        this.tagname = tagname;
    }

    @Override
    public String toString() {
        return "Tag {" +
                "tag name='" + tagname +
                '}';
    }
}
