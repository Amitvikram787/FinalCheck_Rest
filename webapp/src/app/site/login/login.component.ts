import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   isLoginValid:boolean=true;
   authSource:boolean=false;
  constructor(private authService:AuthService,
    private rout:ActivatedRoute,
    private router:Router) { 
      this.authSource=this.rout.snapshot.queryParams['notLogged'];
    }

  ngOnInit() {
  }
  onSubmit(form:NgForm)
  {
    const username=form.value.uname;
    const password=form.value.pwd;
    if(username==='John')
    {
      this.isLoginValid=false;

    }
    else
    {
      this.authService.logIn(username,password);
      this.router.navigate([this.authService.redirectUrl]);
     
    }
  
  }

}
