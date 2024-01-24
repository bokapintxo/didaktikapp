import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor() { }

  private indiceConversacion = 0;
  private escribiendo = false;

  mostrarConversacion(conversacion: any[], callback: Function): void {
    if (this.escribiendo) {
      return;
    }

    this.escribiendo = true;

    const linea = conversacion[this.indiceConversacion];

    const personajeElement = document.getElementById('personaje');
    const mensajeElement = document.getElementById('mensaje');

    if (!personajeElement || !mensajeElement) {
      console.error("No se pudo encontrar uno o ambos elementos en el DOM.");
      this.escribiendo = false;
      return;
    }

    personajeElement.innerText = linea.personaje;
    mensajeElement.innerHTML = '';

    const mensajeTexto = linea.mensaje.split('');
    let i = 0;

    // Almacenar referencia al servicio para evitar problemas con 'this'
    const self = this;

    function agregarCaracter() {
      if (i < mensajeTexto.length) {
        const mensajeElement = document.getElementById('mensaje');

        if (mensajeElement) {
          if (mensajeTexto[i] === '\n') {
            mensajeElement.innerHTML += '<br>';
          } else {
            mensajeElement.innerHTML += mensajeTexto[i];
          }

          i++;
          setTimeout(agregarCaracter, 20);
        } else {
          console.error("El elemento 'mensaje' no se encontró en el DOM.");
          self.escribiendo = false;
          return;
        }
      } else {
        self.indiceConversacion++;

        if (self.indiceConversacion === conversacion.length) {
          self.indiceConversacion = 0;
        }

        setTimeout(() => {
          self.escribiendo = false;
          callback();
        }, 20);
      }
    }

    agregarCaracter();
  }
}
