package com.cognizant.moviecruiser.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.moviecruiser.MovieCruiserConstants;
import com.cognizant.moviecruiser.model.Movie;
import com.cognizant.moviecruiser.service.MovieService;

@RestController
@RequestMapping("/movies")
public class MovieController {
	public static Logger LOGGER = LoggerFactory.getLogger(MovieController.class);
	@Autowired
	InMemoryUserDetailsManager inMemoryUserDetailsManager;
	@Autowired
	MovieService movieService;

	@GetMapping
	public List<Movie> getMoviesList() {
		LOGGER.debug("Inside getAllMenuItems");
		List<Movie> movies;
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String user = authentication.getName();
		LOGGER.debug("Username " + user);
		if (user != "anonymousUser") {
			UserDetails userDetails = inMemoryUserDetailsManager.loadUserByUsername(user);
			LOGGER.debug("UserDetails " + userDetails);
			String role = userDetails.getAuthorities().toArray()[0].toString();
			MovieCruiserConstants.LOGGER.debug("Role " + role);
			if (role.equals("ROLE_ADMIN")) {
				LOGGER.debug("Inside MenuItemListAdmin get");
				movies = movieService.getMoviesListAdmin();
			} else {
				LOGGER.debug("Inside MenuItemListCustomer get");
				movies = movieService.getMoviesListCustomer();
			}
		} else {
			LOGGER.debug("Inside MenuItemListCustomer get");
			movies = movieService.getMoviesListCustomer();
		}
		return movies;
	}

	@PutMapping()
	public void modifyMovie(@RequestBody Movie movie) {
		movieService.modifyMovie(movie);
	}

	@GetMapping("/{movieId}")
	public Movie getMovie(@PathVariable long movieId) {
		return movieService.getMovie(movieId);
	}
}
