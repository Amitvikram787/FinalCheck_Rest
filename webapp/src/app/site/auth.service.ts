import { UserService } from "./user.service";
import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { AuthenticateService } from "../services/authenticate.service";
import { UserAuthService } from "../services/user-auth.service";
import { Router } from "@angular/router";
import { FavoriteService } from "../shoppinglist/favorite/favorite.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    error: string;
    loggedIn = false;
    isAdmin = false;
    accessToken: string;
    redirectUrl = '/';
    userAuthenticated: User;
    constructor(private userService: UserService, private favoriteService: FavoriteService, private authenticateService: AuthenticateService, private userAuthService: UserAuthService, private router: Router) { }
    logIn(username: string, password: string) {
        this.authenticateService.authenticate(username, password).subscribe(data => {
            this.userAuthService.loggedIn = true;
            console.log(data.token);
            this.userAuthService.setToken(data.token);
            this.userAuthService.setRole(data.role);
            this.userAuthService.setUser(username);
            this.loggedIn = true;
            this.isAdmin = data.role === 'ROLE_ADMIN';
            this.router.navigate(['/']);
        },
            (error) => {
                console.log(error.message);
                if (error.status == 401) {
                    this.error = "Invalid username/password";
                }
            });
    }
    logOut() {
        this.redirectUrl = '/';
        this.loggedIn = false;
    }
    isAdminUser() {
        return this.isAdmin;
    }
}