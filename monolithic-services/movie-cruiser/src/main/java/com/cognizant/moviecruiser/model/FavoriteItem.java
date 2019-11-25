package com.cognizant.moviecruiser.model;

public class FavoriteItem {
	private long favoriteId;
	private Movie favorite;

	public long getFavoriteId() {
		return favoriteId;
	}

	public void setFavoriteId(long favoriteId) {
		this.favoriteId = favoriteId;
	}

	public Movie getFavorite() {
		return favorite;
	}

	public void setFavorite(Movie favorite) {
		this.favorite = favorite;
	}

	public FavoriteItem(long favoriteId, Movie favorite) {
		super();
		this.favoriteId = favoriteId;
		this.favorite = favorite;

	}

	public FavoriteItem() {
		super();
	}
}
