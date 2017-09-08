import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { CharacterComponent } from './character/character.component';
import { FilmComponent } from './film/film.component';
import { FilmDetailComponent } from './film/film-detail.component';
import { CharacterDetailComponent } from './character/character-detail.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: WelcomeComponent },
    {
        path: 'character',
        children: [
            {
                path: '',
                component: CharacterComponent
            },
            {
                path: ':name',
                component: CharacterDetailComponent,
                data: { some_data: 'some value' }
            }
        ]
    },
    {
        path: 'film',
        children: [
            {
                path: '',
                component: FilmComponent
            },
            {
                path: ':id',
                component: FilmDetailComponent,
                data: { some_data: 'some value' }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }