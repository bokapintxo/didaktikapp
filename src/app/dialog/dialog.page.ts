import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.page.html',
  styleUrls: ['./dialog.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})

export class DialogPage implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.fetchConversacion();
  }

  fetchConversacion(): void {
    fetch('assets/dialog/dialog.json')
      .then((response) => response.json())
      .then((conversacion) => {
        this.dialogService.mostrarConversacion(conversacion, () => {
          // Puedes realizar acciones adicionales después de mostrar la conversación
        });
      })
      .catch((error) =>
        console.error('Error al cargar el archivo JSON:', error)
      );
  }

  pasarMensaje(): void {
    this.fetchConversacion();
  }
}
