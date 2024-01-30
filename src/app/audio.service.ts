import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private media!: MediaObject;

  constructor(private mediaPlugin: MediaObject) {}

  playAudio(filePath: string) {
    this.mediaPlugin.play();
  }
  
  stopAudio() {
    if (this.media) {
      this.media.stop();
      this.media.release();
    }
  }
}