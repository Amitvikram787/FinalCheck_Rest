import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, Observer } from "rxjs";
import { Movie } from "./movie.model";
@Injectable({
    providedIn: 'root'
})
export class MovieService {
    configUrl = 'assets/data.json';
    filter = new Subject();
    constructor(private http: HttpClient) {

    }
    getAllMovies(): Observable<any> {
        return this.http.get(this.configUrl);
    }
    getMovie(id: number): Observable<any> {
        return Observable.create((observer: Observer<Movie>) => {
            this.getAllMovies().subscribe((movies: Movie[]) => {
                const movie = movies.find(movies => movies.id === id);
                return observer.next(movie);
            });
        });
    }
}