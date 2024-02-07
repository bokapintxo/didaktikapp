import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, Platform } from '@ionic/angular';

import { DialogService } from '../services/dialog.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  i: number = 0;
  private backButtonSubscription: Subscription = new Subscription();

  constructor(private dialogService: DialogService, private route: ActivatedRoute, private router: Router, private platform: Platform, private navi: NavController) {}

  ngOnInit(): void {
    this.audioBtnSecondary = new Audio();
    this.audioBtnSecondary.src = '../../assets/aud/btn_txikia.mp3';    
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      // Do nothing here to disable the back button
    });
  }

  ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      this.i = params['i'];
    });
    console.log("kaixo:", this.i);
    this.fetchConversacion(this.i);
  }

  fetchConversacion(idx: number): void {
    fetch('assets/dialog/dialog.json')
      .then((response) => response.json())
      .then((conversacion) => {
        let val = this.dialogService.mostrarConversacion(conversacion, () => {}, idx);
        if(val === 800) {
          this.navi.navigateForward("/puzzlea");
          return;
        } else {
          this.fetchConversacion(val);
        }
        return;
      })
      .catch((error) =>
        console.error('Error al cargar el archivo JSON:', error)
      );
  }

  pasarMensaje(): void {
    this.fetchConversacion(this.i);
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
