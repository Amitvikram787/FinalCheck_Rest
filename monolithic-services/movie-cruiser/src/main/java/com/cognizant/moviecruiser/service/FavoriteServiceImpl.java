package com.cognizant.moviecruiser.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.moviecruiser.dao.FavoriteDao;
import com.cognizant.moviecruiser.exception.FavoriteEmptyException;
import com.cognizant.moviecruiser.model.Favorite;

@Service
public class FavoriteServiceImpl implements FavoriteService {
	@Autowired
	FavoriteDao favoriteDao;

	@Override
	public void addToFavorite(String user, long movieId) {
		favoriteDao.addToFavorite(user, movieId);
	}

	@Override
	public Favorite getAllFavorites(String user) throws FavoriteEmptyException {
		return favoriteDao.getAllFavorites(user);
	}

	@Override
	public void removeFavorite(String user, long movieId) {
		favoriteDao.removeFavorite(user, movieId);
	}

}
