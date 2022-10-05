package com.shivam.quoteswithsecurity.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.shivam.quoteswithsecurity.entity.User;
import com.shivam.quoteswithsecurity.service.CustomUserService;

@RestController
@RequestMapping("/v1")
@CrossOrigin(origins = "*", allowedHeaders ="*")
public class Signup {
	
	@Autowired
	private CustomUserService customUserService;
	
	@PostMapping("/signup")
	public User saveUser(@RequestBody User user) {
//		System.out.println(quote);
		customUserService.saveUser(user);
		return user;
	}

}
