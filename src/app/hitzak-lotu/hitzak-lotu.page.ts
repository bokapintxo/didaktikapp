import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-hitzak-lotu',
  templateUrl: './hitzak-lotu.page.html',
  styleUrls: ['./hitzak-lotu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HitzakLotuPage implements OnInit {

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
  
    const esPrimerConjunto = nombreBoton === 'eguenzuri' || nombreBoton === 'bariku_argi' || nombreBoton === 'zapatu_erregularra' || nombreBoton === 'domeka_karnabala' || nombreBoton === 'ilen_karnabala' || nombreBoton === 'martitzen_karnabala' || nombreBoton === 'txitxiburduntxi';
  
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
    const botones = ['eguenzuri', 'bariku_argi', 'zapatu_erregularra', 'domeka_karnabala', 'ilen_karnabala', 'martitzen_karnabala', 'txitxiburduntxi'];
    return botones.every(boton => this.parejasFormadas[boton]);
  }
  
  

  constructor() { }

  ngOnInit() {
  }

}
