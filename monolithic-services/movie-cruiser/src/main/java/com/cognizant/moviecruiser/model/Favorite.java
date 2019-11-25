package com.cognizant.moviecruiser.model;

import java.util.List;

public class Favorite {
	private List<FavoriteItem> favorites;
	private double total;

	public Favorite(List<FavoriteItem> favorites, double total) {
		super();
		this.favorites = favorites;
		this.total = total;
	}

	public List<FavoriteItem> getFavorites() {
		return favorites;
	}

	public void setFavorites(List<FavoriteItem> favorites) {
		this.favorites = favorites;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public Favorite() {
		super();
	}
}
