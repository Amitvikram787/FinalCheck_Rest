import { Injectable } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { Favorite } from './favorite';
import { MovieList } from '../movie/movie.model';
import { UUID } from 'angular2-uuid';

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {
    cart: Favorite =
        {
            items: null,
            total: 0
        }
    constructor(private foodService: MovieService) { }
    getCart() {
        return this.cart;
    }
    addToCart(foodid: number, quantity: number) {
        this.foodService.getItem(foodid).subscribe((foodToadded: MovieList) => {
            const uid = UUID.UUID();
            if (this.cart.items == null) {
                this.cart.items = [{ itemId: uid, foodItem: foodToadded, quantity }];
                this.cart.total += 1;
            }
            else {
                let repeated = this.cart.items.findIndex(cartItem => cartItem.foodItem.id === foodid);
                if (repeated !== -1) {
                    this.cart.items[repeated].quantity += quantity;
                } else {
                    this.cart.items.push({ itemId: uid, foodItem: foodToadded, quantity });
                    this.cart.total += 1
                }
               

            }

        });
    }

    removeFromCart(itemId: string) {
        const itemIndex = this.cart.items.findIndex(cartItem => cartItem.itemId === itemId);
        const itemTobeRemoved = this.cart.items.splice(itemIndex, 1)[0];
        this.cart.total -= 1;
    }
    clearCart() {
        this.cart.items = null;
        this.cart.total = 0;
    }
    /*removeQuantityFromCart(itemId:number){
              const itemIndex=this.cart.items.findIndex(cartItem=>cartItem.foodItem.id === itemId);
              if(itemIndex!==-1){
                  this.cart.total-=this.cart.items[itemIndex].foodItem.boxoffice;
                  this.cart.items[itemIndex].quantity--;
                  if(this.cart.items[itemIndex].quantity<1){
                      this.cart.items.splice(itemIndex,1);
                  }
              }
          }  */
}
