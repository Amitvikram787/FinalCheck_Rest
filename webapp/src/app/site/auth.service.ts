import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Injectable({
    providedIn:'root'
})
export class AuthService
{
    logedIn=false;
    isAdmin=false;
    redirectUrl='/';
    userAuthenticated:User;
     constructor(private userService:UserService)
     {

     }
     logIn(username:string,password:string)
     {
         this.userService.authenticate(username,password).subscribe((user:User)=>
         {
             if(user)
             {
                 this.logedIn=true;
                 this.userAuthenticated=user;
                 this.isAdmin=user.role==='Admin';
             }
         })
     }
     logOut()
     {
         this.redirectUrl='/';
         this.logedIn=false;
     }
     isAdminUser()
     {
         return this.isAdmin;
     }


    
}