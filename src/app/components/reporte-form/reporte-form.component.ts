import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../shared/models/reporte';
import { ActivatedRoute, Router } from '@angular/router';
import { ReporteService } from '../../services/reporte.service';

@Component({
  selector: 'app-reporte-form',
  templateUrl: './reporte-form.component.html',
  styleUrls: ['./reporte-form.component.scss']
})
export class ReporteFormComponent {

  reporte: Reporte;
  error: boolean = false;
  errorMensaje: '';
  completado: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private reporteService: ReporteService) {
    this.reporte = new Reporte();
  }

  onSubmit() {
    setTimeout(() => {
      this.reporteService.save(this.reporte).subscribe(result => this.gotoReporteList());
    }, 2500);
    this.completado = true;
  }


  gotoReporteList() {
    this.router.navigate(['/listReporte']);
  }

}
