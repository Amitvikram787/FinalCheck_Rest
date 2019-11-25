import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';
import { NotFoundComponent } from './site/not-found/not-found.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { FavoriteComponent } from './shoppinglist/favorite/favorite.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { AuthGaurdService } from './site/auth-gaurd.service';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'edit/:id', component: MovieEditComponent, canActivate: [AuthGaurdService] },
  { path: 'favorite', component: FavoriteComponent, canActivate: [AuthGaurdService] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
