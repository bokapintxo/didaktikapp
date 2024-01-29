import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-hitzak-lotu-bi',
  templateUrl: './hitzak-lotu-bi.page.html',
  styleUrls: ['./hitzak-lotu-bi.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class HitzakLotuBiPage implements OnInit {

  estilosBotones: { [key: string]: string } = {};
  parejasFormadas: { [key: string]: boolean } = {};
  botonesSeleccionados: { [key: string]: boolean } = {};

  estiloaAldatu(nombreBoton: string, claseEstilo: string) {
    if (this.tieneParejaYColor(nombreBoton)) {
      return;
    }
  
    // Si el botón ya está seleccionado, deselecciónalo
    if (this.botonesSeleccionados[nombreBoton]) {
      this.botonesSeleccionados = {};
      this.estilosBotones[nombreBoton] = '';
      return;
    }
  
    const esPrimerConjunto = nombreBoton === 'ostirala' || nombreBoton === 'osteguna' || nombreBoton === '2igandea' || nombreBoton === 'astelehena' || nombreBoton === 'asteartea' || nombreBoton === '1igandea' || nombreBoton === 'larunbata';
  
    if (esPrimerConjunto || Object.keys(this.botonesSeleccionados).length > 0) {
      this.botonesSeleccionados[nombreBoton] = true;
      this.estilosBotones[nombreBoton] = claseEstilo;
  
      if (Object.keys(this.botonesSeleccionados).length === 2) {
        const botonesSeleccionadosArray = Object.keys(this.botonesSeleccionados);
        const primerBoton = botonesSeleccionadosArray[0];
        const segundoBoton = botonesSeleccionadosArray[1];
  
        if (this.sonPareja(primerBoton, segundoBoton)) {
          this.parejasFormadas[primerBoton] = true;
          this.parejasFormadas[segundoBoton] = true;
          this.botonesSeleccionados = {};

          if (this.allSakatuta()) {
            document.getElementById("hitzaklotujarraitu")?.classList.remove('button-disabled');
          }
        } else {
          this.estilosBotones[primerBoton] = this.parejasFormadas[primerBoton] ? claseEstilo : '';
          this.estilosBotones[segundoBoton] = this.parejasFormadas[segundoBoton] ? claseEstilo : '';
          this.botonesSeleccionados = {};
        }
      }
    }
  }
  
  sonPareja(boton1: string, boton2: string): boolean {
    return this.estilosBotones[boton1] === this.estilosBotones[boton2] && this.estilosBotones[boton1] !== '';
  }

  tieneParejaYColor(boton: string): boolean {
    return this.parejasFormadas[boton];
  }

  allSakatuta(): boolean {
    const botones = ['ostirala', 'osteguna', '2igandea', 'astelehena', 'asteartea', '1igandea', 'larunbata'];
    return botones.every(boton => this.parejasFormadas[boton]);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
