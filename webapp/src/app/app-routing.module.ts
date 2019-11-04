import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';
import { PageNotFoundComponent } from './site/page-not-found/page-not-found.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { FavoriteComponent } from './shoping/favorite/favorite.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { AuthGardService } from './site/auth-gard.service';

const routes: Routes = [
  {path:'', component:MovieListComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'favorite',component:FavoriteComponent,canActivate:[AuthGardService]},
  {path:'productEdit/:id',component:MovieEditComponent,canActivate:[AuthGardService]},
  {path:'movie',component:MovieListComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
