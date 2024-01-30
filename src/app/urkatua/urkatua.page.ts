import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-urkatua',
  templateUrl: './urkatua.page.html',
  styleUrls: ['./urkatua.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class UrkatuaPage implements OnInit {
  hitza: string = 'LANDAKOGUNEA';
  erroreak: number = 0;
  aukeratutakoletrak: Set<string> = new Set<string>();

  constructor() {}

  ngOnInit(): void {}

  seleccionarLetra(letra: string): void {
    this.aukeratutakoletrak.add(letra);
  }

  confirmarSeleccion(): void {
    // Lógica para comprobar si la letra está en la palabra y actualizar la interfaz
    const letrasEnPalabra = this.hitza.split('');

    letrasEnPalabra.forEach((letra, index) => {
      const elemento = document.getElementById(`letra-${index}`);

      if (elemento && this.aukeratutakoletrak.has(letra)) {
        elemento.classList.remove('hidden');
      } 
    });

    // Lógica para comprobar si el usuario ha adivinado la palabra completa
    if (this.haGanado()) {
      // Aquí puedes agregar la lógica para manejar la victoria del usuario
      console.log('¡Has ganado!');
    } else {
      // Aquí puedes agregar la lógica para continuar el juego
    }
  }

  haGanado(): boolean {
    const letrasEnPalabra = this.hitza.split('');
    return letrasEnPalabra.every((letra) => this.aukeratutakoletrak.has(letra));
  }
}
