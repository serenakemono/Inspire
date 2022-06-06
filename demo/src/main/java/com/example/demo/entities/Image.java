package com.example.demo.entities;

import javax.persistence.Lob;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

public class Image {
    public Image() {}

    private String name;

    @Lob
    private byte[] content;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }

    @Override
    public String toString() {
        Charset charset = StandardCharsets.US_ASCII;
        return "Image{" +
                "name=" + name +
                ", content=" + new String(content, charset) +
                '}';
    }
}
