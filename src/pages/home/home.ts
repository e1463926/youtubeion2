import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

videoUrl: SafeResourceUrl;

constructor(private domSanitizer: DomSanitizer, public navCtrl: NavController) {
  this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/aw5pMBeOWM0')
}

}
