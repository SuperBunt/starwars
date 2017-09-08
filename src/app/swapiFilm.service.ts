import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Film } from './film';
import { PEOPLE } from './main-characters';
import { AllResponse } from './AllResponse';
import { Observable } from "rxjs/Rx";

@Injectable()
export class SwapiFilmService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private baseUrl = 'https://swapi.co/api/films/';  // URL to web api

    constructor(private http: Http) { }

    getFilmList(): Promise<any> {
        return this.http.get(this.baseUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getFilm(url: string): Promise<Film> {
        console.log(this.baseUrl + url +'/');
        return this.http.get(this.baseUrl + url +'/')
            .toPromise()
            .then(response => response.json() as Film)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}