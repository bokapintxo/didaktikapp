import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonicModule } from '@ionic/angular';
import { state } from '@angular/animations';
import { Router } from '@angular/router';
import { Haptics } from '@capacitor/haptics';

@Component({
  selector: 'app-bingoa',
  templateUrl: './bingoa.page.html',
  styleUrls: ['./bingoa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BingoaPage implements OnInit {
  btnStates: boolean[] = new Array(9).fill(false);

  constructor(private router: Router) {
    
  }

  ngOnInit() {
    
  }
  
  toggleSakatuta(index:number, btn:any):void {
    this.btnStates[index] = !this.btnStates[index];
    btn.classList.toggle('bingosakatuta');
    document.getElementById("bingocheck" + index)?.classList.toggle("hidden");
    if (this.allSakatuta()) {
      document.getElementById("bingojarraitu")?.classList.remove('button-disabled');
    } else {
      document.getElementById("bingojarraitu")?.classList.add('button-disabled');
    }
  }

  allSakatuta():boolean {
    return this.btnStates.every(state => state === true);
  }

  navigateHome(): void {
    this.router.navigate(['/home']);
  }

  async pushButton() {
    await Haptics.vibrate({duration: 5});
    await new Promise(resolve => setTimeout(resolve, 50));
    await Haptics.vibrate({duration: 5});
  }
}
