import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Haptics } from '@capacitor/haptics';

@Component({
  selector: 'app-hizki-zopa',
  templateUrl: './hizki-zopa.page.html',
  styleUrls: ['./hizki-zopa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HizkiZopaPage implements OnInit {
  board: string[][];
  selected: HTMLElement[] = [];
  words: string[] = ['eskultura', 'estatua', 'frontoi', 'geltoki', 'iturri', 'kiosko', 'parke', 'tren'];
  wordPos: string[] = [];
  audioCorrect: any;
  audioWrong: any;
  audioBtn: any;


  constructor() {
    this.board = [];

    for (let i = 0; i < 10; i++) {
      const row: string[] = [];
      for (let j = 0; j < 10; j++) {
        const char = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        row.push(char);
      }
      this.board.push(row);
    }
  }

  ngOnInit() {
    this.audioBtn = new Audio();
    this.audioBtn.src = '../../assets/aud/btn_handia.mp3';

    this.audioCorrect = new Audio();
    this.audioCorrect.src = '../../assets/aud/correct.mp3';

    this.audioWrong = new Audio();
    this.audioWrong.src = '../../assets/aud/wrong.mp3';
  }

  generateBoard() {
    //generates a starting position for each word
    for(const word in this.words){
      const wordLength = this.words[word].length;
      const isVertical: boolean = Math.random() > 0.5;
      let row: number;
      let col: number;
      //if the word is vertical, the row should be 10 - the length to avoid overflow
      //and vice versa for horizontal with the column
      if(isVertical) {
        row = Math.floor(Math.random() * (10 - wordLength));
        col = Math.floor(Math.random() * 10);
      } else {
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * (10 - wordLength));
      }
      this.wordPos.push(row + '-' + col + '-' + isVertical);
      //TODO: check that we're not repeating positions or overwriting words
    }
  }

  handleClick(id: string) {
    console.log('Clicked div id:', id);
    const element = document.getElementById(id) as HTMLElement;
    if (element) {
      element.classList.toggle('zopaselected');
      this.selected.push(element);
    }
  }

  handleReset() {
    this.selected.forEach(element => {
      element.classList.remove('zopaselected');
    });
    this.selected = [];
  }

  async pushButton() {
    this.audioBtn.load();
    this.audioBtn.play();
    await Haptics.vibrate({duration: 10});
    await new Promise(resolve => setTimeout(resolve, 50));
    await Haptics.vibrate({duration: 10});
  }

  async incorrectHaptic() {
    this.audioWrong.load();
    this.audioWrong.play();
    await Haptics.vibrate({duration: 50});
    await new Promise(resolve => setTimeout(resolve, 100));
    await Haptics.vibrate({duration: 200});
  }

  async correctHaptic() {
    this.audioCorrect.load();
    this.audioCorrect.play();
    await Haptics.vibrate({duration: 20});
    await new Promise(resolve => setTimeout(resolve, 80));
    await Haptics.vibrate({duration: 20});
    await new Promise(resolve => setTimeout(resolve, 80));
    await Haptics.vibrate({duration: 20});
    await new Promise(resolve => setTimeout(resolve, 80));
    await Haptics.vibrate({duration: 20});
  }
}
function foreach(arg0: boolean) {
  throw new Error('Function not implemented.');
}
