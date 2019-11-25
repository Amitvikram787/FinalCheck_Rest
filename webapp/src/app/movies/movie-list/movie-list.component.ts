import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/site/auth.service';
import { FavoriteService } from 'src/app/shoppinglist/favorite/favorite.service';
import { MovieListservice } from 'src/app/services/movielist.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  originalMovies: Movie[];
  user: string;
  constructor(private userAuthService: UserAuthService, private movieItemService: MovieListservice, private router: Router, private authService: AuthService, private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.movieItemService.getAllMovies().subscribe((data: Movie[]) => {
      console.log(data);
      this.movies = [...data];
      this.originalMovies = [...data];
    });
    this.movieItemService.filter.subscribe((obj: { title: string }) => {
      if (obj.title !== '') {
        const result = this.originalMovies.filter(movie => movie.title.toLowerCase().includes(obj.title.toLowerCase()));
        this.movies = result ? result : [];
      } else {
        this.movies = [...this.originalMovies];
      }
    });
  }
  addMovieToFavorite(id: number) {
    this.user = this.userAuthService.getUser();
    console.log("add Movie " + this.user);
    this.favoriteService.addFavorite(this.user, id).subscribe();
    if (!this.authService.loggedIn) {
      this.router.navigate(['/login'], { queryParams: { notLogged: true } });
    }
  }
}
