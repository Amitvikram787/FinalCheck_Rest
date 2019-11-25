import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';
import { MovieListservice } from 'src/app/services/movielist.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  editForm: FormGroup;
  edited = false;
  constructor(private route: ActivatedRoute, private movieService: MovieService, private router: Router, private movieListService: MovieListservice) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      'id': new FormControl(),
      'imgSrc': new FormControl(),
      'title': new FormControl(null, [Validators.required, Validators.maxLength(200), Validators.pattern("^[a-zA-Z :]+$")]),
      'boxOffice': new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
      'dateOfLaunch': new FormControl(null),
      'genre': new FormControl(null, Validators.required),
      'active': new FormControl(null, Validators.required),
      'hasTeaser': new FormControl(null)
    });
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.movieListService.getMovie(id).subscribe((movie: Movie) => {
        if (movie) {
          this.editForm.patchValue({
            id: movie.id,
            title: movie.title,
            boxOffice: movie.boxOffice,
            dateOfLaunch: movie.dateOfLaunch,
            genre: movie.genre,
            active: movie.active,
            hasTeaser: movie.hasTeaser,
            imgSrc: movie.imgSrc
          });
        } else {
          this.router.navigate(['not-found']);
        }
      });
    })
  }

  onSubmitEditForm() {
    console.log(this.editForm);
    this.movieListService.updateMovie(this.editForm.value).subscribe(data => {
      console.log("Subscribed");
    })
    this.edited = true;
  }
}
