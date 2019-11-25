import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { UserAuthService } from "./user-auth.service";
import { environment } from "src/environments/environment";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Movie } from "../movies/movie.model";

@Injectable({
    providedIn: 'root'
})
export class MovieListservice {
    filter = new Subject();
    baseUrl = environment.baseUrl;
    constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }
    getAllMovies(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        };
        return this.httpClient.get<Movie[]>(this.baseUrl + "/movies", httpOptions);
    }
    getMovie(id: number): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        };
        return this.httpClient.get<Movie>(`${this.baseUrl + "/movies"}/${id}`, httpOptions);
    }
    updateMovie(movie: Movie): Observable<void> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        };
        return this.httpClient.put<void>(this.baseUrl + "/movies", movie, httpOptions);
    }
}