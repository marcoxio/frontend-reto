import { Component, OnInit } from '@angular/core';
import { CalculoService } from '../../services/calculo.service';
import { Calculo } from '../../shared/models/calculo';
import { Horas } from '../../shared/models/horas';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.scss']
})
export class CalculoComponent {

  calculo: Calculo;
  horas: Horas[];
  conDatos: boolean = false;
  respuesta = null;
  error: boolean = false;
  errorMensaje = '';

  constructor(private calculoService: CalculoService) {
    this.calculo = new Calculo();
  }

  onSubmit() {
    this.calculoService.getCalculo(this.calculo.idTecnico, this.calculo.semana).subscribe((data: any) => {
      const { horas, error } = data;
      if (error == null) {
        this.horas = horas;
        console.log(data);
        this.conDatos = true;
      } else {
        this.errorMensaje = error;
        this.error = true;

      }
    }, error => {
      console.log(error);
    });
  }




}
