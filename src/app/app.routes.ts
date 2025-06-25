import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Characters } from './pages/characters/characters';
import { Episodes } from './pages/episodes/episodes';
import { PageNotFound } from './pages/page-not-found/page-not-found';


export const routes: Routes = [
    { 
    path: '',
    component: Home, 
    title: "Rick & Morty"
    },
    { 
    path: 'characters',
    component: Characters, 
    title: "Rick & Morty Characters"
    },
    { 
    path: 'episodes',
    component: Episodes, 
    title: "Rick & Morty Episodes"
    },
    {
        path: '**',
        component: PageNotFound
    }

];
