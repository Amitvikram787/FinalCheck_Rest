package com.cognizant.moviecruiser.security;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.cognizant.moviecruiser.MovieCruiserConstants;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {
	public JwtAuthorizationFilter(AuthenticationManager authenticationManger) {
		super(authenticationManger);
		MovieCruiserConstants.LOGGER.info("Start");
		MovieCruiserConstants.LOGGER.debug("(): ", authenticationManger);
	}

	@Override
	protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		MovieCruiserConstants.LOGGER.info("Start");
		String header = req.getHeader("Authorization");
		MovieCruiserConstants.LOGGER.debug(header);

		if (header == null || !header.startsWith("Bearer ")) {
			MovieCruiserConstants.LOGGER.info("Inside if");
			chain.doFilter(req, res);
			return;
		}
		UsernamePasswordAuthenticationToken authentication = getAuthentication(req);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		chain.doFilter(req, res);
		MovieCruiserConstants.LOGGER.info("End");
	}

	private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
		String token = request.getHeader("Authorization");
		if (token != null) {
			Jws<Claims> jws;
			try {
				jws = Jwts.parser().setSigningKey("secretkey").parseClaimsJws(token.replace("Bearer ", ""));
				String user = jws.getBody().getSubject();
				MovieCruiserConstants.LOGGER.debug("" + jws);
				MovieCruiserConstants.LOGGER.debug("" + jws.getBody());
				MovieCruiserConstants.LOGGER.debug("" + jws.getBody().getSubject());
				MovieCruiserConstants.LOGGER.debug(user);
				if (user != null) {
					return new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
				}
			} catch (JwtException ex) {
				return null;
			}
			return null;
		}
		return null;
	}

}
