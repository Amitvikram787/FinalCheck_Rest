import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FavoriteService } from 'src/app/shoppinglist/favorite/favorite.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,private userAuthService:UserAuthService, private router: Router,private favoriteService:FavoriteService) { }

  ngOnInit() {
  }
  isAuthenticated() {
    return this.authService.loggedIn;
  }
  isAdmin() {
    return this.authService.isAdmin;
  }
  getUser() {
    return this.userAuthService.getUser();
  }
  onSignOut() {
    this.authService.logOut();
    this.router.navigate([this.authService.redirectUrl]);
  }
}
