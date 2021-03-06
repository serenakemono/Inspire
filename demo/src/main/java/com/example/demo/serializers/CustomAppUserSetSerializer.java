package com.example.demo.serializers;

import com.example.demo.entities.AppUser;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class CustomAppUserSetSerializer extends StdSerializer<Set<AppUser>> {

    private static Set<AppUser> users =new HashSet<AppUser>();

    public CustomAppUserSetSerializer() {
        this(null);
    }

    protected CustomAppUserSetSerializer(Class<Set<AppUser>> t) {
        super(t);
    }


    @Override
    public void serialize(
            Set<AppUser> users,
            JsonGenerator generator,
            SerializerProvider provider)
            throws IOException, JsonProcessingException {

        List<String> usernames = new ArrayList<>();
        for (AppUser user : users) {
            usernames.add(user.getUsername());
        }
        generator.writeObject(usernames);
    }
}
