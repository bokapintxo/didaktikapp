import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

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
}
