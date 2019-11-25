package com.cognizant.moviecruiser.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cognizant.moviecruiser.exception.FavoriteEmptyException;
import com.cognizant.moviecruiser.model.Favorite;
import com.cognizant.moviecruiser.model.FavoriteItem;
import com.cognizant.moviecruiser.model.Movie;

@Repository
public class FavoriteDaoCollectionImpl implements FavoriteDao {
	@Autowired
	MovieDao moviesDao;
	private static HashMap<String, Favorite> userFavorites;

	public FavoriteDaoCollectionImpl() {
		super();
		if (userFavorites == null) {
			userFavorites = new HashMap<>();
		}
	}

	@Override
	public void addToFavorite(String user, long movieId) {
		Movie movie = moviesDao.getMovie(movieId);
		FavoriteItem favoriteItem = new FavoriteItem(movieId, movie);
		if (userFavorites.containsKey(user)) {
			List<FavoriteItem> favorites = userFavorites.get(user).getFavorites();
			boolean added = false;
			for (FavoriteItem favorite : favorites) {
				if (favorite.getFavoriteId() == movieId) {
					added = true;
					break;
				}
			}
			if (!added) {
				FavoriteItem favoriteItems = new FavoriteItem(movieId, movie);
				favorites.add(favoriteItems);
			}
		} else {
			Favorite favorite = new Favorite(new ArrayList<>(), 0);
			favorite.getFavorites().add(favoriteItem);
			userFavorites.put(user, favorite);
		}
	}

	@Override
	public Favorite getAllFavorites(String user) throws FavoriteEmptyException {
		if (userFavorites.containsKey(user)) {
			Favorite favorite = userFavorites.get(user);
			List<FavoriteItem> favorites = favorite.getFavorites();
			if (favorites.isEmpty()) {
				throw new FavoriteEmptyException();
			} else {
				favorite.setTotal(favorites.size());
				return favorite;
			}
		} else {
			throw new FavoriteEmptyException();
		}
	}

	@Override
	public void removeFavorite(String user, long movieId) {
		List<FavoriteItem> favorites = userFavorites.get(user).getFavorites();
		for (FavoriteItem favorite : favorites) {
			if (favorite.getFavoriteId() == movieId) {
				favorites.remove(favorite);
				break;
			}
		}

	}

}
