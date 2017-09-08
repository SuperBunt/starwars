import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { CharacterDetailComponent } from './character/character-detail.component';
import { FilmComponent } from './film/film.component';
import { FilmDetailComponent } from './film/film-detail.component';
import { FilmListComponent } from './film/film-list.component';
import { NavbarComponent } from './navbar.component';
import { WelcomeComponent } from './welcome.component';
// services
import { SwapiService } from './swapi.service';
import { SwapiFilmService } from './swapiFilm.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharacterComponent,
    CharacterDetailComponent,
    FilmComponent,
    FilmDetailComponent,
    FilmListComponent,
    WelcomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SwapiService,
    SwapiFilmService
  ],
  bootstrap: [
    AppComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
