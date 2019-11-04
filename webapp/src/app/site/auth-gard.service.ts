import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot,RouterStateSnapshot  } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {

  constructor(private authService:AuthService,private router:Router) { }
  canActivate( route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>
  {
    this.authService.redirectUrl=state.url;
    console.log('URL',state.url);
    return Observable.create((observer:Observer<boolean>)=>
    {
      if(this.authService.logedIn)
      {
        console.log('Logeged In');
        observer.next(true);
      }
      else{
        console.log('Not Logged IN');
        this.router.navigate(['login'])
      }
    });

  }
}