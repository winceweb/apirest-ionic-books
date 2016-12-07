import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
import {BooksService} from '../../providers/books-service';

@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
  providers: [BooksService]
})
export class Books {
  public books: any;

  constructor(public booksService: BooksService){

  }

  ionViewDidLoad(){
    this.booksService.get().then(data => {
        this.books = data;
        console.log(this.books);
    }).catch(err => {
      console.log('Error loading books');
    });
  }




}
