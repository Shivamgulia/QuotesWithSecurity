package com.shivam.quoteswithsecurity;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.shivam.quoteswithsecurity.dao.UserDetailsRepository;
import com.shivam.quoteswithsecurity.entity.Authority;
import com.shivam.quoteswithsecurity.entity.User;

@SpringBootApplication
public class QuotesApplication {
	
//	@Autowired
//	private PasswordEncoder passwordEncoder;
//	
//	@Autowired
//	private UserDetailsRepository userDetailsRepository;

	public static void main(String[] args) {
		SpringApplication.run(QuotesApplication.class, args);
	}
	
//	@Bean
//	public WebMvcConfigurer corsConfigurer() {
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/**").allowedOrigins("http://localhost:3000");
//			}
//		};
//	}
	
	
//	@PostConstruct
//	protected void init() {
//		
//		List<Authority> authorityList=new ArrayList<>();
//		
//		authorityList.add(createAuthority("USER","User role"));
//		authorityList.add(createAuthority("ADMIN","Admin role"));
//		
//		User user=new User();
//		
//		user.setUserName("shivam");
//		user.setFirstName("shivam");
//		user.setLastName("Gulia");
//		
//		user.setPassword(passwordEncoder.encode("shivam@123"));
//		user.setEnabled(true);
//		user.setAuthorities(authorityList);
//		
//		userDetailsRepository.save(user);
//		
//		
//		
//	}
//	
//	
//	private Authority createAuthority(String roleCode,String roleDescription) {
//		Authority authority=new Authority();
//		authority.setRoleCode(roleCode);
//		authority.setRoleDescription(roleDescription);
//		return authority;
//	}

}
