import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-laberintoa',
  templateUrl: './laberintoa.page.html',
  styleUrls: ['./laberintoa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LaberintoaPage implements OnInit {

  // Hartzaren posizioa
  posX: number = 0;
  posY: number = -150;

  // Santa Mariaren hasierako posizioa
  Xsm: number = 0;
  Ysm: number = 0;

  laberintoa: number[][] = [
    [9 , 5 , 1 , 4 , 5 , 5 , 5 , 3 ],
    [8 , 11, 12, 5 , 1 , 9 , 7 , 10],
    [8 , 12, 5 , 5 , 6 , 12, 3 , 10],
    [8 , 11, 9 , 5 , 3 , 11, 12, 2 ],
    [8 , 2 , 10, 11, 10, 12, 5 , 2 ],
    [8 , 14, 12, 2 , 12, 3 , 9 , 6 ],
    [8 , 1 , 7 , 8 , 7 , 10, 12, 3 ],
    [8 , 12, 5 , 6 , 9 , 6 , 11, 10],
    [8 , 13, 1 , 3 , 10, 9 , 6 , 10],
    [12, 5 , 6 , 14, 10, 12, 5 , 6 ],
  ]

  mugituGora(): void {
    this.posY -= 50;
    this.posizioaEguneratu();
  }

  mugituEzkerrera(): void {
    this.posX -= 50;
    this.posizioaEguneratu();
  }

  mugituEskuinera(): void {
    this.posX += 50;
    this.posizioaEguneratu();
  }

  mugituBehera(): void {
    this.posY += 50;
    this.posizioaEguneratu();
  }

  posizioaEguneratu(): void {
    const laberintoHartzaImg = document.querySelector('.hartzaimg') as HTMLElement;
    laberintoHartzaImg.style.transform = `translate(${this.posX}px, ${this.posY}px)`;

//Jokuaren logika

    //Hartza azken puntura heltzean jokua amaituko da
    if(this.posX === this.Xsm && this.posY === this.Ysm) {
      alert('Zorionak, irabazi duzu!');
    }

  }
  
  constructor() { }

  ngOnInit() {
    const laberintoSantaMariaImg = document.querySelector('.santamariaimg') as HTMLElement;
    laberintoSantaMariaImg.style.transform = `translate(${this.Xsm}px, ${this.Ysm}px)`;
    this.posizioaEguneratu();
  }

}
