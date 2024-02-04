import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-urkatua',
  templateUrl: './urkatua.page.html',
  styleUrls: ['./urkatua.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})

export class UrkatuaPage implements OnInit {
  hitza: string = 'LANDAKOGUNEA';
  falloak: number = 0;
  aukeratutakoletrak: Set<string> = new Set<string>();
  momentukoletra: string = ''; // Nueva propiedad para almacenar la letra seleccionada
  abecedario: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  letraClase: { [letra: string]: string } = {};
  letraZuzenak: Set<string> = new Set<string>();
  letraOkerrak: Set<string> = new Set<string>();

  constructor(private router: Router) {}
  ngOnInit(): void {}

  letraAukeratu(letra: string): void {
    if(this.hitzaAsmatuta()) {
      return;
    }
    // Aukeratutako botoi bat berriz aukeratzen bada, kolorea kenduko zaio
    if(this.letraClase[letra] === 'urkatuabtn-sakatu') {
      this.letraClase[letra] = '';
      this.momentukoletra = '';
    } else {
      // Beste botoi bat aukeratzean, aurreko botoiari .urkatubtn-sakatu klasea kenduko zaio
      if(this.momentukoletra !== '') {
        this.letraClase[this.momentukoletra] = this.letraZuzenak.has(this.momentukoletra) ? 'urkatuabtn-zuzen' : this.letraOkerrak.has(this.momentukoletra) ? 'urkatuabtn-oker' : '';
      }

      this.momentukoletra = letra;
      this.letraClase[letra] = 'urkatuabtn-sakatu';
      
      // Momentuan aukeratuta dagoen letra gordeko du
      this.momentukoletra = letra;
    }
  }

  aukeraKonfirmatu(): void {
    if(this.momentukoletra) {

      if(this.hitza.includes(this.momentukoletra)) {
        this.aukeratutakoletrak.add(this.momentukoletra);
        this.letraClase[this.momentukoletra] = 'urkatuabtn-zuzen';
        this.letraZuzenak.add(this.momentukoletra);
      } else {
        this.falloak++;
        this.letraClase[this.momentukoletra] = 'urkatuabtn-oker';
        this.letraOkerrak.add(this.momentukoletra);
      }
      this.momentukoletra = '';
    }

    if(this.falloak >= 8) {
      this.jokuaReseteatu();
      return;
    }
  }

  jokuaReseteatu(): void {
    this.hitza = 'LANDAKOGUNEA';
    this.falloak = 0;
    this.aukeratutakoletrak.clear();
    this.letraClase = {};
    this.letraZuzenak.clear();
    this.letraOkerrak.clear();
    this.momentukoletra = '';
  }

  hitzaAsmatuta(): boolean {
    for(const letra of this.hitza) {
      if(!this.aukeratutakoletrak.has(letra)) {
        return false;
      }
    }
    return true;
  }

  navigateHome(): void {
    this.router.navigate(['/home']);
    this.jokuaReseteatu();
  }
}