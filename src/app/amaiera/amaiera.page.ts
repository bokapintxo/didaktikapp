import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-amaiera',
  templateUrl: './amaiera.page.html',
  styleUrls: ['./amaiera.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AmaieraPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
