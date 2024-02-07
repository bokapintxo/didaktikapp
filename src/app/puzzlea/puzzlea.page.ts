import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, Platform } from '@ionic/angular';
import { Haptics } from '@capacitor/haptics';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puzzlea',
  templateUrl: './puzzlea.page.html',
  styleUrls: ['./puzzlea.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PuzzleaPage implements OnInit {

  private backButtonSubscription: Subscription = new Subscription();

  constructor(private router: Router, private platform: Platform) { }

  ngOnInit() {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      // Do nothing here to disable the back button
    });
  }

  async pushButton() {
    await Haptics.vibrate({duration: 5});
    await new Promise(resolve => setTimeout(resolve, 50));
    await Haptics.vibrate({duration: 5});
  }

  goBack() {
    this.router.navigate(['/dialog'], { queryParams: { i: 21 } });
    this.backButtonSubscription.unsubscribe();
  }
}
