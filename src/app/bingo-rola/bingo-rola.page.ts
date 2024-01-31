import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Haptics } from '@capacitor/haptics';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bingo-rola',
  templateUrl: './bingo-rola.page.html',
  styleUrls: ['./bingo-rola.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BingoRolaPage implements OnInit {
  audioBtn: any;
  audioBtnSecondary: any;

  constructor(private router: Router) { }

  navigateBingoa(): void {
    this.router.navigate(['/bingoa']);
  }

  navigateBingoRng(): void {
    this.router.navigate(['/bingo-irakaslea']);
  }

  ngOnInit() {
    this.audioBtn = new Audio();
    this.audioBtn.src = '../../assets/aud/btn_handia.mp3';

    this.audioBtnSecondary = new Audio();
    this.audioBtnSecondary.src = '../../assets/aud/btn_txikia.mp3';
  }

  async pushButton() {
    this.audioBtn.load();
    this.audioBtn.play();
    await Haptics.vibrate({duration: 10});
    await new Promise(resolve => setTimeout(resolve, 50));
    await Haptics.vibrate({duration: 10});
  }

  async pushSecondaryButton() {
    this.audioBtnSecondary.load();
    this.audioBtnSecondary.play();
    await Haptics.vibrate({duration: 5});
  }
}
