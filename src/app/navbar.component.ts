import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./app.component.css']
})
export class NavbarComponent {
    tabs = [{text: 'Characters', route: 'character'}, {text: 'Films', route: 'film'}];

    constructor( private router: Router ) { }

}