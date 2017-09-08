import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location, DatePipe } from '@angular/common';

import { SwapiFilmService } from '../swapiFilm.service';

import { Film } from '../film'

@Component({
    selector: 'film',
    templateUrl: './film.component.html',
    styleUrls: ['../app.component.css'],

})
export class FilmComponent implements OnInit {
    selectedFilm: Film;
    list: Film[];

    constructor(
        private filmService: SwapiFilmService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    ) { }

    getFilms(): void {
        this.filmService.getFilmList()
            .then(list => {
                console.log(list);
                this.list = list.results;
            }
        );
    }
   
    ngOnInit(): void {
        this.getFilms();
    }

    goBack(): void {
        this.location.back();
    }

    onSelect(url: string): void {
        // regex url for film id
        this.filmService.getFilm(url).then(res => this.selectedFilm = res);
    }
    

}