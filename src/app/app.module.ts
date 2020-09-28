import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


// Importar rutas
import { ROUTES } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReporteFormComponent } from './components/reporte-form/reporte-form.component';
import { ReporteListComponent } from './components/reporte-list/reporte-list.component';
import { CalculoComponent } from './components/calculo/calculo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReporteComponent,
    NavbarComponent,
    ReporteFormComponent,
    ReporteListComponent,
    CalculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
