package com.cognizant.moviecruiser.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Favorite is Empty")
public class FavoriteEmptyException extends Exception {
	public FavoriteEmptyException() {
		super();
	}
}
