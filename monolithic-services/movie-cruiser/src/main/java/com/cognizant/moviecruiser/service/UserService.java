package com.cognizant.moviecruiser.service;

import com.cognizant.moviecruiser.exception.UserAlreadyExistsException;
import com.cognizant.moviecruiser.model.User;

public interface UserService {
	public void signUp(User user) throws UserAlreadyExistsException;
}
