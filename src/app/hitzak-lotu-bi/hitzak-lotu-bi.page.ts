import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';
import { Haptics } from '@capacitor/haptics';

@Component({
  selector: 'app-hitzak-lotu-bi',
  templateUrl: './hitzak-lotu-bi.page.html',
  styleUrls: ['./hitzak-lotu-bi.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class HitzakLotuBiPage implements OnInit {
  private backButtonSubscription: Subscription = new Subscription();
  botoiEstiloak: { [key: string]: string } = {};
  sortutakoBikoteak: { [key: string]: boolean } = {};
  aukeratutakoBotoiak: { [key: string]: boolean } = {};

  audioCorrect: any;
  audioWrong: any;
  audioBtn: any;
  audioBtnSecondary: any;

  estiloaAldatu(botoiIzena: string, estiloClass: string) {
    if (this.tieneParejaYColor(botoiIzena)) {
      return;
    }
  
    if (this.aukeratutakoBotoiak[botoiIzena]) {
      this.aukeratutakoBotoiak = {};
      this.botoiEstiloak[botoiIzena] = '';
      return;
    }
  
    const lehenBikotea = botoiIzena === 'ostirala' || botoiIzena === 'osteguna' || botoiIzena === '2igandea' || botoiIzena === 'astelehena' || botoiIzena === 'asteartea' || botoiIzena === '1igandea' || botoiIzena === 'larunbata';
  
    if (lehenBikotea || Object.keys(this.aukeratutakoBotoiak).length > 0) {
      this.aukeratutakoBotoiak[botoiIzena] = true;
      this.botoiEstiloak[botoiIzena] = estiloClass;
  
      if (Object.keys(this.aukeratutakoBotoiak).length === 2) {
        const aukeratutakoBotoiakArray = Object.keys(this.aukeratutakoBotoiak);
        const lehenBotoia = aukeratutakoBotoiakArray[0];
        const bigarrenBotoia = aukeratutakoBotoiakArray[1];
  
        if (this.sonPareja(lehenBotoia, bigarrenBotoia)) {
          this.correctHaptic();
          this.sortutakoBikoteak[lehenBotoia] = true;
          this.sortutakoBikoteak[bigarrenBotoia] = true;
          this.aukeratutakoBotoiak = {};

          if (this.allSakatuta()) {
            document.getElementById("hitzaklotujarraitu2")?.classList.remove('button-disabled');
          }
        } else {
          this.incorrectHaptic();
          this.botoiEstiloak[lehenBotoia] = this.sortutakoBikoteak[lehenBotoia] ? estiloClass : '';
          this.botoiEstiloak[bigarrenBotoia] = this.sortutakoBikoteak[bigarrenBotoia] ? estiloClass : '';
          this.aukeratutakoBotoiak = {};
        }
      }
    }
  }
  
  sonPareja(botoia1: string, botoia2: string): boolean {
    return this.botoiEstiloak[botoia1] === this.botoiEstiloak[botoia2] && this.botoiEstiloak[botoia1] !== '';
  }

  tieneParejaYColor(boton: string): boolean {
    return this.sortutakoBikoteak[boton];
  }

  allSakatuta(): boolean {
    const botoiak = ['ostirala', 'osteguna', '2igandea', 'astelehena', 'asteartea', '1igandea', 'larunbata'];
    return botoiak.every(boton => this.sortutakoBikoteak[boton]);
  }
  
  constructor(private router: Router, private platform: Platform) { }

  ngOnInit() {
    this.audioBtn = new Audio();
    this.audioBtn.src = '../../assets/aud/btn_handia.mp3';

    this.audioBtnSecondary = new Audio();
    this.audioBtnSecondary.src = '../../assets/aud/btn_txikia.mp3';

    this.audioCorrect = new Audio();
    this.audioCorrect.src = '../../assets/aud/correct.mp3';

    this.audioWrong = new Audio();
    this.audioWrong.src = '../../assets/aud/wrong.mp3';

    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(9999, () => {
      // Do nothing here to disable the back button
    });
  }

  goBack() {
    this.router.navigate(['/dialog'], { queryParams: { i: 97 } });
    this.backButtonSubscription.unsubscribe();
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  async pushButton() {
    this.audioBtn.load();
    this.audioBtn.play();
    await Haptics.vibrate({duration: 10});
    await new Promise(resolve => setTimeout(resolve, 50));
    await Haptics.vibrate({duration: 10});
  }

  async pushSecondaryButton() {
    this.audioBtnSecondary.load();
    this.audioBtnSecondary.play();
    await Haptics.vibrate({duration: 5});
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
