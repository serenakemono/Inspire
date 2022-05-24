package com.example.demo;

import com.example.demo.entities.AppUser;
import com.example.demo.entities.Authority;
import com.example.demo.repositories.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class DemoApplication {

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private AppUserRepository appUserRepository;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@PostConstruct
	protected void init() {
		List<Authority> authorityList = new ArrayList<>();
		authorityList.add(createAuthority("USER", "User role"));
		authorityList.add(createAuthority("ADMIN", "Admin role"));

		AppUser user = new AppUser();

		user.setUsername("serena");
		user.setPassword(passwordEncoder.encode("123"));
		user.setEnabled(true);
		user.setEmail("123@gmail.com");
		user.setAuthorities(authorityList);

		appUserRepository.save(user);
	}

	private Authority createAuthority(String roleCode, String roleDescription) {
		Authority authority = new Authority();
		authority.setRoleCode(roleCode);
		authority.setRoleDescription(roleDescription);
		return authority;
	}
}
