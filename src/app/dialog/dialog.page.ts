import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.page.html',
  styleUrls: ['./dialog.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DialogPage implements OnInit {

  loadScript() {
    const script = document.createElement('script');
    script.src = '../../assets/dialog/dialog.js';
    document.body.appendChild(script);
  }

  constructor() { }

  ngOnInit() {
    this.loadScript();
  }

}
