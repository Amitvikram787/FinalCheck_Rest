import { Observable, Observer } from "rxjs";
import { User } from "./user.model";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class UserService {
    baseUrl = environment.baseUrl;
    constructor(private httpClient: HttpClient) { }
    authenticate(username: string, password: string): Observable<User> {
        return Observable.create((observer: Observer<any>) => {
            if (username !== 'admin') {
                observer.next({ username, firstName: 'John', lastName: 'Duo', role: 'customer' });
            } else {
                observer.next({ username, firstName: 'admin', lastName: 'user', role: 'admin' });
            }
            return null;
        });
    }
    addUser(user: User) {
        return this.httpClient.post(this.baseUrl + "/users", user);
    }
}