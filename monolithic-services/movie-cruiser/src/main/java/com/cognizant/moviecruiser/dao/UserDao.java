package com.cognizant.moviecruiser.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.stereotype.Repository;

import com.cognizant.moviecruiser.MovieCruiserConstants;
import com.cognizant.moviecruiser.exception.UserAlreadyExistsException;
import com.cognizant.moviecruiser.model.User;

@Repository
public class UserDao {
	@Autowired
	InMemoryUserDetailsManager inMemoryUserDetailsManager;

	public PasswordEncoder passwordEncoder() {
		MovieCruiserConstants.LOGGER.info("Start");
		return new BCryptPasswordEncoder();
	}

	public void signup(User user) throws UserAlreadyExistsException {
		if (!inMemoryUserDetailsManager.userExists(user.getUserName())) {
			inMemoryUserDetailsManager
					.createUser(org.springframework.security.core.userdetails.User.withUsername(user.getUserName())
							.password(passwordEncoder().encode(user.getPassword())).roles("USER").build());
			MovieCruiserConstants.LOGGER.info("New User Created");
		} else {
			throw new UserAlreadyExistsException();
		}
	}
}
