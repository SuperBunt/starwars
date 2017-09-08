import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Character } from './character';
import { PEOPLE } from './main-characters';
import { AllResponse } from './AllResponse';
import { Observable } from "rxjs/Rx";

@Injectable()
export class SwapiService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private baseUrl = 'https://swapi.co/api/';  // URL to web api

    constructor(private http: Http) { }

    getMainCharacters(): Promise<Character[]> {
        return Promise.resolve(PEOPLE);
    }

    getAllCharacters() {
        return Observable.forkJoin(
            this.http.get(`${this.baseUrl}people`)
                .map((res: Response) => res.json()),
            this.http.get(`${this.baseUrl}people/?page=2`)
                .map((res: Response) => res.json()),
            this.http.get(`${this.baseUrl}people/?page=3`)
                .map((res: Response) => res.json())
        );
    }

    getPerson(url: string): Promise<Character> {
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Character)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}