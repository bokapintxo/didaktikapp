import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-urkatua',
  templateUrl: './urkatua.page.html',
  styleUrls: ['./urkatua.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UrkatuaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
