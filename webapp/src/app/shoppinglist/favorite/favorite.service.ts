import { Injectable } from "@angular/core";
import { Favorite } from "./favorite.model";
import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { UserAuthService } from "src/app/services/user-auth.service";

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {
    user: string;
    menuItemId: number;
    baseUrl = environment.baseUrl;
    constructor(private userAuthService: UserAuthService, private httpClient: HttpClient) { }
    getAllFavorites(): Observable<any> {
        console.log("Inside get All Favorites");
        this.user = this.userAuthService.getUser();
        console.log(this.user);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        };
        return this.httpClient.get<Favorite[]>(this.baseUrl + "/favorites" + "/" + this.user, httpOptions);
    }
    addFavorite(user: string, movieId: number): Observable<any> {
        console.log("Inside add To Favorites");
        console.log(user);
        console.log(this.userAuthService.getToken());
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        };
        return this.httpClient.post<Favorite>(this.baseUrl + "/favorites" + "/" + user + "/" + movieId, {}, httpOptions);
    }
    removeFavorite(movieId: number): Observable<any> {
        console.log("Inside remove From Favorite");
        this.user = this.userAuthService.getUser();
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        };
        return this.httpClient.delete<Favorite>(this.baseUrl + "/favorites" + "/" + this.user + "/" + movieId, httpOptions);
    }
}