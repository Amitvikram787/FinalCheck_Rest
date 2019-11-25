package com.cognizant.moviecruiser.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

import com.cognizant.moviecruiser.model.Movie;

@Repository
public class MovieDaoCollectionImpl implements MovieDao {
	private static List<Movie> moviesList;

	public MovieDaoCollectionImpl() {
		super();
		ApplicationContext context = new ClassPathXmlApplicationContext("moviecruiser.xml");
		moviesList = context.getBean("moviesList", java.util.ArrayList.class);
		((AbstractApplicationContext) context).close();
	}

	@Override
	public List<Movie> getMoviesListAdmin() {
		return moviesList;
	}

	@Override
	public List<Movie> getMoviesListCustomer() {
		List<Movie> moviesListCustomer = new ArrayList<>();
		Date today = new Date();
		for (Movie movie : moviesList) {
			if ((movie.getDateOfLaunch().before(today) || movie.getDateOfLaunch().equals(today)) && movie.isActive()) {
				moviesListCustomer.add(movie);
			}
		}
		return moviesListCustomer;
	}

	@Override
	public void modifyMovie(Movie movie) {
		for (int i = 0; i < moviesList.size(); i++) {
			if (moviesList.get(i).getId() == movie.getId()) {
				moviesList.set(i, movie);
				break;
			}
		}
	}

	@Override
	public Movie getMovie(long movieId) {
		Movie movieItem = null;
		for (Movie movie : moviesList) {
			if (movie.getId() == movieId) {
				movieItem = movie;
				break;
			}
		}
		return movieItem;
	}

}
