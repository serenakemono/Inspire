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

public class CustomAppUserSerializer extends StdSerializer<AppUser> {

    private static AppUser appUser = new AppUser();

    public CustomAppUserSerializer() {
        this(null);
    }

    protected CustomAppUserSerializer(Class<AppUser> t) {
        super(t);
    }


    @Override
    public void serialize(
            AppUser appUser,
            JsonGenerator generator,
            SerializerProvider provider)
            throws IOException, JsonProcessingException {

        generator.writeObject(appUser.getUsername());
    }
}
