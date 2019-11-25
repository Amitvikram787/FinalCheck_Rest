import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginValid = true;
  authSource = false;
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private userAuthService: UserAuthService) {
    this.authSource = this.route.snapshot.queryParams['notLogged'];
  }

  ngOnInit() {
    if (this.userAuthService.getMenuItemId() != -1) {
      this.isLoginValid = true;
    } else {
      this.isLoginValid = false;
    }
  }
  onSubmit(form: NgForm) {
    this.authService.logIn(form.value.username, form.value.password);
  }

}
