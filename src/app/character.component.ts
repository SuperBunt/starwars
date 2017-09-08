import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location, DatePipe } from '@angular/common';

import { SwapiService } from './swapi.service';

import { Character } from './character'

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
        this.swapiService.getPerson(url).then(res => this.selectedPerson = res);
    }

    gotoDetail(): void {
        this.router.navigate(['/character', this.selectedPerson.name]);
    }
}