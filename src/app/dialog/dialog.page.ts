import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, Platform } from '@ionic/angular';

import { DialogService } from '../services/dialog.service';
import { Router } from '@angular/router';
import { Haptics } from '@capacitor/haptics';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.page.html',
  styleUrls: ['./dialog.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})

export class DialogPage implements OnInit {
  audioBtnSecondary: any;

  private backButtonSubscription: Subscription = new Subscription();

  constructor(private dialogService: DialogService, private router: Router, private platform: Platform) {}

  ngOnInit(): void {
    this.audioBtnSecondary = new Audio();
    this.audioBtnSecondary.src = '../../assets/aud/btn_txikia.mp3';
    this.fetchConversacion();
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      // Do nothing here to disable the back button
    });
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

  navigateImg() {
    this.router.navigate(['/argazkiak']);
  }

  async pushSecondaryButton() {
    this.audioBtnSecondary.load();
    this.audioBtnSecondary.play();
    await Haptics.vibrate({duration: 5});
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }  
}
