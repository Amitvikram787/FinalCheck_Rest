package com.cognizant.moviecruiser.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.moviecruiser.dao.MovieDaoCollectionImpl;
import com.cognizant.moviecruiser.model.Movie;

@Service
public class MovieServiceImpl implements MovieService {
	@Autowired
	MovieDaoCollectionImpl movieDao;

	@Override
	public List<Movie> getMoviesListAdmin() {
		return movieDao.getMoviesListAdmin();
	}

	@Override
	public List<Movie> getMoviesListCustomer() {
		return movieDao.getMoviesListCustomer();
	}

	@Override
	public void modifyMovie(Movie movie) {
		movieDao.modifyMovie(movie);
	}

	@Override
	public Movie getMovie(long movieId) {
		return movieDao.getMovie(movieId);
	}

}
