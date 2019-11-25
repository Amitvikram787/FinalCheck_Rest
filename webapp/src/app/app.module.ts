import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './site/header/header.component';
import { NotFoundComponent } from './site/not-found/not-found.component';
import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';
import { UserService } from './site/user.service';
import { FavoriteComponent } from './shoppinglist/favorite/favorite.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieItemComponent } from './movies/movie-item/movie-item.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieSearchComponent } from './movies/movie-search/movie-search.component';
import { MovieService } from './movies/movie.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    FavoriteComponent,
    MovieEditComponent,
    MovieItemComponent,
    MovieListComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
