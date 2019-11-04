import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './site/header/header.component';
import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';
import { PageNotFoundComponent } from './site/page-not-found/page-not-found.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { MovieInfoComponent } from './movie/movie-info/movie-info.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { SearchComponent } from './movie/search/search.component';
import { FavoriteComponent } from './shoping/favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    MovieEditComponent,
    MovieInfoComponent,
    MovieListComponent,
    SearchComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
