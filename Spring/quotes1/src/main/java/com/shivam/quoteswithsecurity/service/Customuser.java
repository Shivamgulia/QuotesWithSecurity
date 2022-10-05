package com.shivam.quoteswithsecurity.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.shivam.quoteswithsecurity.entity.User;


public interface Customuser {
	
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
	
	public User saveUser(User user);

}
