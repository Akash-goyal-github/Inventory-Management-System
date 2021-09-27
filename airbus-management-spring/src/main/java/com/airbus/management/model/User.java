package com.airbus.management.model;

import java.io.Serializable;

public class User implements Serializable{
	
	private static final long serialVersionUID = 5926468583005150707L;
	
	private String username;
	private String password;
	
	
	public User() {
		super();
	}


	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}
	
	
	

}
