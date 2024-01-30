import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
//import { Media } from '@ionic-native/media/ngx';
//import { AudioService } from '../audio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {

  constructor(private router: Router) {}

  navigateBingo(): void {
    this.router.navigate(['/bingoa']);
  }

  navigatePuzzle(): void {
    this.router.navigate(['/puzzlea']);
  }

  navigateHitzak(): void {
    this.router.navigate(['/hitzak-lotu']);
  }

  navigateHitzak2(): void {
    this.router.navigate(['/hitzak-lotu-bi']);
  }

  navigateDialog(): void {
    this.router.navigate(['/dialog']);
  }

  navigateTemplate(): void {
    this.router.navigate(['/template-page']);
  }

  async pushButton() {
    await Haptics.vibrate({duration: 10});
    await new Promise(resolve => setTimeout(resolve, 50));
    await Haptics.vibrate({duration: 10});
  }

  async pushSecondaryButton() {
    await Haptics.vibrate({duration: 5});
  }

  async incorrectHaptic() {
    await Haptics.vibrate({duration: 50});
    await new Promise(resolve => setTimeout(resolve, 100));
    await Haptics.vibrate({duration: 200});
  }

  async correctHaptic() {
    const correctPath = '../../assets/audio/correct.mp3';
    //this.audio.playAudio(correctPath);
    await Haptics.vibrate({duration: 20});
    await new Promise(resolve => setTimeout(resolve, 80));
    await Haptics.vibrate({duration: 20});
    await new Promise(resolve => setTimeout(resolve, 80));
    await Haptics.vibrate({duration: 20});
    await new Promise(resolve => setTimeout(resolve, 80));
    await Haptics.vibrate({duration: 20});
  }
}
