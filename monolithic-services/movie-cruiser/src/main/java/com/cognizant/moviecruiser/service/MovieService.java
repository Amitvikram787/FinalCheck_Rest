package com.cognizant.moviecruiser.service;

import java.util.List;

import com.cognizant.moviecruiser.model.Movie;

public interface MovieService {
	public List<Movie> getMoviesListAdmin();

	public List<Movie> getMoviesListCustomer();

	public void modifyMovie(Movie movie);

	public Movie getMovie(long movieId);
}
