import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-kredituak',
  templateUrl: './kredituak.page.html',
  styleUrls: ['./kredituak.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class KredituakPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
