import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router, private route :ActivatedRoute) { }

  ngOnInit() {
  }

  isAuthenticated()
  {
   return this.authService.logedIn;
  }
  isAdmin()
  {
    return this.authService.isAdmin;
  }
  getUser()
  {
    return this.authService.userAuthenticated;
  }
  onSignOut(){
    this.authService.logOut();
    this.router.navigate([this.authService.redirectUrl]);
  }
}
