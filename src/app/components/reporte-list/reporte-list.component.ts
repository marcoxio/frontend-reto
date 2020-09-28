import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../shared/models/reporte';
import { ReporteService } from '../../services/reporte.service';

@Component({
  selector: 'app-reporte-list',
  templateUrl: './reporte-list.component.html',
  styleUrls: ['./reporte-list.component.scss']
})
export class ReporteListComponent implements OnInit {
  reportes: Reporte[];
  constructor(private reporteService: ReporteService) { }

  ngOnInit() {
    this.reporteService.findAll().subscribe(data => {
      this.reportes = data;
    });
  }

}
