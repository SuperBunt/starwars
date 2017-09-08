import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { CharacterComponent } from './character.component';
// import { FilmComponent } from './films.component';
import { CharacterDetailComponent } from './character-detail.component';
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
                data : {some_data : 'some value'}
            }
        ]
    }
//   { path: 'films', component: FilmComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }