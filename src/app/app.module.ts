import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Auth } from '../pages/auth/auth';
import { Books } from '../pages/books/books';
import { ScannerBookPage } from '../pages/scanner-book/scanner-book';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    Auth,
    Books,
    ScannerBookPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Auth,
    Books,
    ScannerBookPage
  ],
  providers: [Storage, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
