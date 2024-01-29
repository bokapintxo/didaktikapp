import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

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

  navigateDialog(): void {
    this.router.navigate(['/dialog']);
  }

  navigateHitzakLotu(): void {
    this.router.navigate(['/hitzak-lotu']);
  }

  navigateUrkatua(): void {
    this.router.navigate(['/urkatua']);
  }

  navigateTemplate(): void {
    this.router.navigate(['/template-page']);
  }

  async pushButton() {
    await Haptics.vibrate({duration: 5});
    await new Promise(resolve => setTimeout(resolve, 50));
    await Haptics.vibrate({duration: 5});
  }
}
