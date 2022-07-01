package com.example.demo.appuser;

import static org.assertj.core.api.Assertions.assertThat;

import com.example.demo.entities.AppUser;
import com.example.demo.repositories.AppUserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import java.io.IOException;
import java.util.Objects;

@DataJpaTest
// work with the actual database
@AutoConfigureTestDatabase(replace = Replace.NONE)
// commit the changes
@Rollback(false)
public class UserRepositoryTests {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private AppUserRepository repo;

    @Test
    public void testCreateAppUser() throws IOException {
        AppUser user = new AppUser();
        user.setEmail("serena.wuluoyu@gmail.com");
        user.setUsername("serenakemono");
        user.setPassword("Pi31415926");
        user.setBio("Loving you till the end like XYZ");

        AppUser savedUser = repo.save(user);

        AppUser existUser = entityManager.find(AppUser.class, savedUser.getUsername());

        assert(Objects.equals(user.getEmail(), existUser.getEmail()));
    }


}
