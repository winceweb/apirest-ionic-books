import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { UsersService } from '../providers/users-service';

import { Auth } from '../pages/auth/auth';
import { Books } from '../pages/books/books';
import { ScannerBookPage } from '../pages/scanner-book/scanner-book';

@Component({
  templateUrl: 'app.html',
  providers: [UsersService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Auth;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public storage: Storage,
    private usersService: UsersService
  ) {
    this.initializeApp();

    this.storage.get('userId').then((val) => {
      if(val != null){

      }
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Se connecter', component: Auth },
      { title: 'Livres', component: Books },
      { title: 'Scanner', component: ScannerBookPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
