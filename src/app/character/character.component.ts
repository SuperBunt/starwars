import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location, DatePipe } from '@angular/common';

import { SwapiService } from '../swapi.service';

import { Character } from '../character'

@Component({
    selector: 'character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.css'],

})
export class CharacterComponent implements OnInit {
    selectedPerson: Character;
    people: Character[];

    constructor(
        private swapiService: SwapiService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    ) { }

    // getCharacters(): void {
    //     this.swapiService.getMainCharacters()
    //         .then(people => {
    //             this.people = people;
    //             console.log(people);
    //         }
    //     );
    // }

    getCharacters() {
        this.swapiService.getAllCharacters()
            .subscribe(data => {
                this.people = data[0].results.concat(data[1].results, data[2].results);
            });
    }

    ngOnInit(): void {
        this.getCharacters();
    }

    goBack(): void {
        this.location.back();
    }

    onSelect(url: string): void {
        //alert(url);
        this.swapiService.getPerson(url).then(res => {
            this.selectedPerson = res;
            // this.selectedPerson.films = res.films.map(elem => this.convertFilmTitle(elem))
        });
    }

    goToFilm(film: string): void {
        console.log(film);
        // let filmId = film.replace(/\D+/g, '');
        this.router.navigate(['/film', film.replace(/\D+/g, '')]);
    }

    gotoDetail(): void {
        this.router.navigate(['/character', this.selectedPerson.name]);
    }

    convertFilmTitle(url: string) {
        switch (url) {
            case 'https://swapi.co/api/films/1/':
                return 'The Phantom Menace';
            case 'https://swapi.co/api/films/2/':
                return 'Attack of the clones';
            case 'https://swapi.co/api/films/3/':
                return 'Revenge of the Sith';
            case 'https://swapi.co/api/films/4/':
                return 'A New Hope';
            case 'https://swapi.co/api/films/5/':
                return 'The Empire Strikes Back';
            case 'https://swapi.co/api/films/6/':
                return 'Return of the Jedi';
            case 'https://swapi.co/api/films/7/':
                return 'The Force Awakens';
        }
    }
}