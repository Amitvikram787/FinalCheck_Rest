import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MovieList } from '../movie.model';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  editForm:FormGroup;
  constructor(private movieService:MovieService,private router:Router, private route:ActivatedRoute) { }
  productEdited:boolean=false;
 

  ngOnInit() {
    this.editForm=new FormGroup({
      'name':new FormControl(null,[Validators.required,Validators.maxLength(200)]),
     'price':new FormControl(null,[Validators.required,Validators.pattern('^[0-9]+$')]),
      'dateOfLaunch':new FormControl(null, [Validators.required]),
      'active':new FormControl(null),
      'category':new FormControl(null,Validators.required),
       'freeDelivery':new FormControl(null),
       })
       this.route.params.subscribe((params:Params)=>
       {
           const prodId=params['id'];
            this.movieService.getItem(prodId).subscribe((product:MovieList)=>
 
           {
   if(product)
   {
    this.editForm.patchValue({
     name:product.title,
     price:product.boxoffice,
     dateOfLaunch:product.date_of_launch,
     active:product.active,
     category:product.gener,
     freeDelivery:product.hasTeaser
    });
    
   }

     else{
      this.router.navigate(['not-found']);

     }
   
 })

       })


}
onSubmitEditForm()
 {
   console.log(this.editForm);
   this.productEdited=true;
 }
}