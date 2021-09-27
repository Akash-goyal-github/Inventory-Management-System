package com.airbus.management.service;

import java.util.ArrayList;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.airbus.management.repository.ProductServiceRepository;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	

	@Autowired
	ProductServiceRepository productServiceRepository;
	

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
			String response= productServiceRepository.fetchPasswordForUserName(username);
		
			System.out.println(response);
		if (!response.equals("")) {
			return new User(username,response,
					new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}

}