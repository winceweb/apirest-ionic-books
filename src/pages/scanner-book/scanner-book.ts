import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Books } from '../books/books';
import 'rxjs/add/operator/map';
import { BooksService } from '../../providers/books-service';
import { UsersService } from '../../providers/users-service';

/*
  Generated class for the ScannerBook page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-scanner-book',
  templateUrl: 'scanner-book.html',
  providers: [BooksService, UsersService]
})
export class ScannerBookPage {
  book: any;
  addedbook: any;
  readBook: any;
  BarCode = {}
  booksPage = Books;

  constructor(
    private booksService: BooksService,
    private usersService: UsersService,
    public storage: Storage,
    public navCtrl: NavController
  ) {}

  ionViewDidLoad() {
    console.log('Hello ScannerBookPage Page');
  }

  scanBook(){
    this.booksService.scanBook(this.BarCode).then(data => {
        this.book = data;
        console.log(this.book.data[0]);
        var body = {
          'title': this.book.data[0].title,
          'description': this.book.data[0].summary,
          'author': this.book.data[0].author_data[0].name
        }

        this.booksService.addBook(body).then(data => {
          this.addedbook = data;
          console.log(this.addedbook);

          this.storage.get('userId').then((val) => {

            this.usersService.bookRead(this.addedbook._id, val).then(data => {
              this.readBook = data;
              console.log(this.readBook);
              this.navCtrl.setRoot(Books);
            });

          });

        });
    }).catch(err => {
      console.log('Error auth user');
    });
  }



}
