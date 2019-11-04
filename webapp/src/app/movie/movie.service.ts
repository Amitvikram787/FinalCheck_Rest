import { Injectable } from '@angular/core';
import { Subject, Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieList } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  configUrl='assets/item.json'
  filter=new Subject();
  constructor(private http:HttpClient){}
  getItems():Observable<any>{
    return this.http.get(this.configUrl);
}
 getItem(id:number):Observable<any>
 {
   return Observable.create((observer:Observer<MovieList>)=>
   {
     this.getItems().subscribe((movies:MovieList[])=>
     {
       const prod=movies.find(product=>product.id==id);
       observer.next(prod);
     })

   })
 }

}
