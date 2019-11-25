import { Component, OnInit, Input, Output } from '@angular/core';
import { Movie } from '../movie.model';
import { AuthService } from 'src/app/site/auth.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;
  @Output() addedToFavorite: EventEmitter<number> = new EventEmitter<number>();
  movieAdded = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  isEditAllowed() {
    return this.authService.logIn && this.authService.isAdminUser();
  }
  onAddToFavorite(id: number) {
    this.addedToFavorite.emit(id);
    this.movieAdded = true;
    setTimeout(() => {
      this.movieAdded = false;
    }, 1000);
    return false;
  }
}
