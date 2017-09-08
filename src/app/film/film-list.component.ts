import 'rxjs/add/operator/switchMap';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location, DatePipe } from '@angular/common';

import { Film } from '../film';
// import { SwapiFilmService } from './weather.service';
@Component({
    selector: 'films',
    templateUrl: './film-list.component.html',
    styleUrls: ['../app.component.css']
})
export class FilmListComponent  {
    @Input() list: Film[];    
}