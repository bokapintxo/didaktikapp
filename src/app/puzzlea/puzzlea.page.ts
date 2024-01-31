import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Haptics } from '@capacitor/haptics';

@Component({
  selector: 'app-puzzlea',
  templateUrl: './puzzlea.page.html',
  styleUrls: ['./puzzlea.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PuzzleaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async pushButton() {
    await Haptics.vibrate({duration: 5});
    await new Promise(resolve => setTimeout(resolve, 50));
    await Haptics.vibrate({duration: 5});
  }
}
