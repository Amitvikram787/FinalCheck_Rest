import { Component, OnInit } from '@angular/core';
import { Favorite } from './favorite.model';
import { FavoriteService } from './favorite.service';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favorite: Favorite;
  error:string;
  constructor(private favoriteService: FavoriteService) {
    this.favoriteService.getAllFavorites().subscribe((favorite)=>{
      this.favorite=favorite;
      console.log(favorite);
    },
    (error)=>{
      this.error=error.error.message;
    })
  }

  ngOnInit() {
  }
  onRemove(id: number) {
    this.favoriteService.removeFavorite(id).subscribe(()=>{
      this.favoriteService.getAllFavorites().subscribe((favorite)=>{
        if(favorite){
          console.log(favorite);
          this.favorite=favorite;
        }
      },
        (error)=>{
          this.error=error.error.message;
          this.favorite.favorites=null;
        }
      )
    })
  }

}
