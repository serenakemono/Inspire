package com.example.demo.serializers;

import com.example.demo.entities.Post;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class CustomPostListSerializer extends StdSerializer<List<Post>> {

    private static List<Post> posts =new ArrayList<Post>();

    public CustomPostListSerializer() {
        this(null);
    }

    protected CustomPostListSerializer(Class<List<Post>> t) {
        super(t);
    }


    @Override
    public void serialize(
            List<Post> posts,
            JsonGenerator generator,
            SerializerProvider provider)
            throws IOException, JsonProcessingException {

        List<Long> ids = new ArrayList<>();
        for (Post post : posts) {
            ids.add(post.getId());
        }
        generator.writeObject(ids);
    }
}
