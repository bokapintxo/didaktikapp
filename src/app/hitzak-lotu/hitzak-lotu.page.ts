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

  estilosBotones: { [key: string]: string } = {}; // // Botoi bakotzarentza klase desberdinak gordetzen ditu
  botonConEstilo: string = '';

  estiloaAldatu(nombreBoton: string, claseEstilo: string) {

    if (this.botonConEstilo && this.botonConEstilo !== nombreBoton) {
      return; // Botoi batek estiloa jarrita badauka, ez dio utziko beste botoiei estiloa aldatzen
    }

    // Clasea jarrita badu, clickarekin kendu, kontrakoz, gehitu egiten du
    this.estilosBotones[nombreBoton] = this.estilosBotones[nombreBoton] === claseEstilo ? '' : claseEstilo;

    this.botonConEstilo = this.estilosBotones[nombreBoton] === '' ? '' : nombreBoton;
  }

  

  constructor() { }

  ngOnInit() {
  }

}
