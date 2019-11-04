import { Component, OnInit } from '@angular/core';
import { MovieList } from '../movie.model';
import { AuthService } from 'src/app/site/auth.service';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { FavoriteService } from 'src/app/shoping/favorite.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

 foods:MovieList[];
 orignallist:MovieList[];
  constructor( private foodService:MovieService,private authService:AuthService,private router:Router,private favoriteService:FavoriteService) { }

  ngOnInit() {
    this.foodService.getItems().subscribe((data:MovieList[])=>
    {
      this.foods=[...data];
      this.orignallist=[...data];
    });
    this.foodService.filter.subscribe((obj:{title:string})=>
    {
      if(obj.title!=='')
      {
        const result=this.orignallist.filter(prod=>prod.title.toLowerCase().includes(obj.title.toLowerCase()));
        this.foods=result?result :[];
      }
      else{
        this.foods=[...this.orignallist];
      }
    }
    )

  }
  addFoodToCart(foodid:number)
  {
    this.favoriteService.addToCart(foodid,1);
    if(!this.authService.logedIn )
    {
      this.router.navigate(['/login'],{queryParams:{notLogged:true}});
    }

  }
 

}
