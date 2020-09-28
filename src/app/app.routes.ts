import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { ReporteListComponent } from './components/reporte-list/reporte-list.component';
import { ReporteFormComponent } from './components/reporte-form/reporte-form.component';
import { CalculoComponent } from './components/calculo/calculo.component';
export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'report', component: ReporteComponent },
    { path: 'listReporte', component: ReporteListComponent },
    { path: 'addReporte', component: ReporteFormComponent },
    { path: 'calculo', component: CalculoComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];