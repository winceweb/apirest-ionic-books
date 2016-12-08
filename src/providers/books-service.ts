import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BooksService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BooksService {

  books: any;
  book: any;
  bookData: any;

  constructor(public http: Http) {
    console.log('Hello BooksService Provider');
  }

  // get(){
  //   return this.http.get('http://localhost:4000/books').map(res => res.json())
  //   .map(books => {
  //     return new Books(books);
  //   }).toPromise();
  // }


    get() {
      return new Promise(resolve => {
        this.http.get('http://localhost:4000/books')
        .map(result => result.json())
        .subscribe(result => {
            this.books = result;
            resolve(this.books);
        })
      });
    }

    scanBook(BarCode){

      return new Promise(resolve => {
        this.http.get('http://isbndb.com/api/v2/json/M3X1ZVX4/book/'+BarCode.label)
        .map(result => result.json())
        .subscribe(result => {
            this.book = result;
            resolve(this.book);
        })
      });
    }


    addBook(bookData) {
      return new Promise(resolve => {
        this.http.post('http://localhost:4000/books', bookData)
        .map(result => result.json())
        .subscribe(result => {
            this.book = result;
            resolve(this.book);
        })
      });
    }

}
