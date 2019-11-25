import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieListservice } from 'src/app/services/movielist.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  constructor(private movieService: MovieService, private movieListService: MovieListservice) { }

  ngOnInit() {
  }
  onSearchText(event: any) {
    this.movieListService.filter.next({ title: event.target.value });
  }
}
