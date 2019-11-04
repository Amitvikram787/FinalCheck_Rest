import { Component, OnInit } from '@angular/core';
import { Favorite } from '../favorite';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  cart:Favorite;

  constructor( private favoriteSevice:FavoriteService) { 
    this.cart=this.favoriteSevice.getCart();
  

  }
  onRemoveItem(itemId:string)
 {
   this.favoriteSevice.removeFromCart(itemId);
 }
  ngOnInit() {
  }
  /*onIncrement(id:number){
      this.favoriteSevice.addToCart(+id,1);
      }
      onDecrement(id:number){
      this.favoriteSevice.removeQuantityFromCart(+id);
      }  */
 
}
