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
  posX: number = 150;
  posY: number = -300;

  // Santa Mariaren hasierako posizioa
  Xsm: number = 200;
  Ysm: number = 150;

  hartzaKoordinadak: number[] = [0,3];
  hartzarenPos:number = 4;

  laberintoa: number[][] = [
    [9 , 5 , 1 , 5 , 5 , 5 , 5 , 3 ],
    [10, 11, 12, 5 , 1 , 9 , 7 , 10],
    [10, 12, 5 , 5 , 6 , 12, 3 , 10],
    [10, 11, 9 , 5 , 3 , 11, 12, 2 ],
    [8 , 2 , 10, 11, 10, 12, 5 , 2 ],
    [10, 14, 12, 2 , 12, 3 , 9 , 6 ],
    [8 , 1 , 7 , 8 , 7 , 10, 12, 3 ],
    [10, 12, 5 , 6 , 9 , 6 , 11, 10],
    [10, 13, 1 , 3 , 10, 9 , 6 , 10],
    [12, 5 , 6 , 14, 14, 12, 5 , 6 ],
  ]

  paretakKalkulatu(aldea: number): boolean {
    let hartzarenPosTemp: number = this.hartzarenPos;
    if(hartzarenPosTemp >= 8) {
      hartzarenPosTemp -= 8;
      if(aldea === 8) {
        return true;
      }
    }
    if(hartzarenPosTemp >= 4) {
      hartzarenPosTemp -= 4;
      if(aldea === 4) {
        return true;
      }
    }
    if(hartzarenPosTemp >= 2) {
      hartzarenPosTemp -= 2;
      if(aldea === 2) {
        return true;
      }
    }
    if(hartzarenPosTemp >= 1) {
      hartzarenPosTemp -= 1;
      if(aldea === 1) {
        return true;
      }
    }
    return false;
  }

  mugituGora(): void {
    if(!this.paretakKalkulatu(1)) {
      this.posY -= 50;
      this.posizioaEguneratu(1);
    }
  }

  mugituEzkerrera(): void {
    if(!this.paretakKalkulatu(8)) {
      this.posX -= 50;
      this.posizioaEguneratu(8);
    }
  }

  mugituEskuinera(): void {
    if(!this.paretakKalkulatu(2)) {
      this.posX += 50;
      this.posizioaEguneratu(2);
    }
  }

  mugituBehera(): void {
    if(!this.paretakKalkulatu(4)) {
      this.posY += 50;
      this.posizioaEguneratu(4);
    }
  }

  posizioaEguneratu(nora:number): void {
    const laberintoHartzaImg = document.querySelector('.hartzaimg') as HTMLElement;
    laberintoHartzaImg.style.transform = `translate(${this.posX}px, ${this.posY}px)`;

    if(nora === 1) {
      this.hartzaKoordinadak[0] -= 1;
    } else if (nora === 4) {
      this.hartzaKoordinadak[0] += 1;
    } else if(nora === 8) {
      this.hartzaKoordinadak[1] -= 1;
    } else if(nora === 2) {
      this.hartzaKoordinadak[1] += 1;
    }

    this.hartzarenPos = this.laberintoa[this.hartzaKoordinadak[0]][this.hartzaKoordinadak[1]];
    console.log("HartzarenPos: " + this.hartzarenPos);
    console.log("HartzaKoordinadak: " + this.hartzaKoordinadak);

    if(this.posX === this.Xsm && this.posY === this.Ysm) {
      this.botoiaAktibatu();
    }
  }

  botoiaAktibatu(): void {
    document.getElementById('laberintoajarraitu')?.classList.remove('button-disabled');
  }

  koordenadakHartu(): {x: number, y: number} [] {
    const koordenadak: {x: number, y: number} [] = [];

    for (let fila = 0; fila < this.laberintoa.length; fila++) {
      for (let columna = 0; columna < this.laberintoa[fila].length; columna++) {
        koordenadak.push({ x: columna, y: fila });
      }
    }
    return koordenadak;
  }

  klaseakHartu(zenbakia: number): string {
    return "laberintoa-pareta" + zenbakia;
  }

  
  constructor() { }

  ngOnInit() {
    const laberintoSantaMariaImg = document.querySelector('.santamariaimg') as HTMLElement;
    laberintoSantaMariaImg.style.transform = `translate(${this.Xsm}px, ${this.Ysm}px)`;
    this.posizioaEguneratu(0);
  }

}
