import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Ingresar } from './ingresar/ingresar';
import { Perfil } from './perfil/perfil';
import { Tablero } from './tablero/tablero';


export const routes: Routes = [ 
    { path:'ingresar', component: Ingresar } ,
    { path:'home', component: Home } ,
    { path:'perfil', component: Perfil },
    { path:'tablero', component: Tablero } 
];
