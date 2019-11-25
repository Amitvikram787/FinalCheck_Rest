package com.cognizant.moviecruiser.service;

import com.cognizant.moviecruiser.exception.FavoriteEmptyException;
import com.cognizant.moviecruiser.model.Favorite;

public interface FavoriteService {
	public void addToFavorite(String user, long movieId);

	public Favorite getAllFavorites(String user) throws FavoriteEmptyException;

	public void removeFavorite(String user, long movieId);
}
