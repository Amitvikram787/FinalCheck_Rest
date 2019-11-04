import { Component, OnInit, Input, Output , EventEmitter  } from '@angular/core';
import { MovieList } from '../movie.model';
import { AuthService } from 'src/app/site/auth.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  
  ngOnInit() {
  }
  @Input() Food:MovieList;
  @Output() addedToCart:EventEmitter<number>=new EventEmitter<number>();
  foodAdded= false;
  constructor( private authService:AuthService) { }

  onAddToCart(foodid:number)
  {
    this.addedToCart.emit(foodid);
    this.foodAdded=true;
    setTimeout(()=>{
      this.foodAdded=false;
    },1000);
    return false;

  }
   authsource=false;

  isEditAllowed()
  {
    return this.authService.logedIn && this.authService.isAdminUser();
  }
  loggedInn(){
     if(this.authService.logedIn){
       this.authsource=true;
     }
  }

}
