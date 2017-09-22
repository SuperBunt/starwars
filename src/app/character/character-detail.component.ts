import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location }                 from '@angular/common';

import { Character } from '../character';
import { SwapiService } from "app/swapi.service";

@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character.component.css']
})

export class CharacterDetailComponent {
  hero: Character;

  constructor(
    private heroService: SwapiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getPerson('https://swapi.co/api/people/1/'))
      .subscribe(hero => this.hero = hero);
  }
  
}