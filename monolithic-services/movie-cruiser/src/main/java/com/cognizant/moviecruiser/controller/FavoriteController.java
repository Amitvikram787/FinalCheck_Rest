package com.cognizant.moviecruiser.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.moviecruiser.exception.FavoriteEmptyException;
import com.cognizant.moviecruiser.model.Favorite;
import com.cognizant.moviecruiser.service.FavoriteService;

@RestController
@RequestMapping("/favorites")
public class FavoriteController {
	public static Logger LOGGER = LoggerFactory.getLogger(FavoriteController.class);
	@Autowired
	private FavoriteService favoriteService;

	@GetMapping("/{user}")
	public Favorite getAllFavorites(@PathVariable String user) throws FavoriteEmptyException {
		LOGGER.debug("Inside getAllCartItems");
		return favoriteService.getAllFavorites(user);
	}

	@PostMapping("/{user}/{movieId}")
	public void addToCartItem(@PathVariable String user, @PathVariable long movieId) {
		LOGGER.debug("Inside addToCartItem");
		favoriteService.addToFavorite(user, movieId);
		;
	}

	@DeleteMapping("/{user}/{movieId}")
	public void removeCartItem(@PathVariable String user, @PathVariable long movieId) {
		LOGGER.debug("Inside delete Favorite");
		favoriteService.removeFavorite(user, movieId);
	}
}
