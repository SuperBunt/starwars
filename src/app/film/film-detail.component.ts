import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { SwapiFilmService } from '../swapiFilm.service';
import { Film } from '../film'

@Component({
    selector: 'film-detail',
    templateUrl: './film-detail.component.html',
    styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
    film: Film;
    isScrolling = true;

    constructor(
        private filmService: SwapiFilmService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.filmService.getFilm(params.get('id')))
            .subscribe(movie => {
                this.film = movie;
                this.film.opening_crawl.replace(/\n/g, "<br><br>");
            });
    }

    toggleClass(){
    //   this.isParaActive = !this.isParaActive;
      this.isScrolling = !this.isScrolling;
  }

    goBack(): void {
        this.location.back();
    }
}