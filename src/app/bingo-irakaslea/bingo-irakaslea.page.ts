import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Haptics } from '@capacitor/haptics';

@Component({
  selector: 'app-bingo-irakaslea',
  templateUrl: './bingo-irakaslea.page.html',
  styleUrls: ['./bingo-irakaslea.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BingoIrakasleaPage implements OnInit {
  audioCorrect: any;
  audioWrong: any;

  constructor() { }

  ngOnInit() {

  }

  async pushButton() {
    await Haptics.vibrate({duration: 10});
    await new Promise(resolve => setTimeout(resolve, 50));
    await Haptics.vibrate({duration: 10});
  }

  async pushSecondaryButton() {
    await Haptics.vibrate({duration: 5});
  }

}
