import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private _location: Location,

  ) {
    this.initializeApp();
    this.exitapp();
  }

  
  exitapp() {
    this.platform.backButton.subscribeWithPriority(1, (processNextHandler) => {
        if (this._location.isCurrentPathEqualTo('/home')) {
            App.exitApp(); 
        }
    });
  }

  initializeApp(){
    setTimeout(()=>{SplashScreen.hide();},1000)
  }
}
