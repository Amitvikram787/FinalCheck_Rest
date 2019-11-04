import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { User } from "./user.model";

@Injectable({
    providedIn:'root'
})
export class UserService
{
    constructor(){}
    authenticate(username:string,password:string):Observable<User>
    {
        return Observable.create((observer:Observer<any>)=>
        {
            if(username!=='admin')
            {
                observer.next({username, firstname:'John',lastname:'Doe', role:'Customer'});
                
            }
            else
            {
                observer.next({username, firstname:'Admin',lastname:'Main', role:'Admin'});
                

            }
        })
    }
}