package com.example.demo.entities;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class CustomTagListSerializer extends StdSerializer<List<Tag>> {

    private static List<Tag> tags =new ArrayList<Tag>();

    public CustomTagListSerializer() {
        this(null);
    }

    protected CustomTagListSerializer(Class<List<Tag>> t) {
        super(t);
    }


    @Override
    public void serialize(
            List<Tag> tags,
            JsonGenerator generator,
            SerializerProvider provider)
            throws IOException, JsonProcessingException {

        List<String> tagnames = new ArrayList<>();
        for (Tag tag : tags) {
            tagnames.add(tag.getTagname());
        }
        generator.writeObject(tagnames);
    }
}
