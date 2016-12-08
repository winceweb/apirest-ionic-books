import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BooksService } from '../../providers/books-service';
import { UsersService } from '../../providers/users-service';
import { Storage } from '@ionic/storage';
import { Auth } from '../auth/auth';

@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
  providers: [BooksService, UsersService]
})
export class Books {
  public books: any;
  public user: any;
  book: any;
  dataBook = {}

  constructor(
    public booksService: BooksService,
    public usersService: UsersService,
    public storage: Storage,
    public navCtrl: NavController
  ){

  }

  ionViewDidLoad(){
    this.storage.get('token').then((val) => {
      // Verify if user is connected
      if(val != null){
        console.log('Token actuel: ', val);
        this.booksService.get().then(data => {
            this.books = data;
            // console.log(this.books);
        }).catch(err => {
          console.log('Error loading books');
        });
      }else{
        this.navCtrl.setRoot(Auth);
      }
    });

    // On récupere les données de l'utilisateur connecté
    this.storage.get('userId').then((val) => {
      console.log('Userid = ',val);
      if(val != null){
        this.usersService.getUser(val).then(data => {
            this.user = data;
            console.log(this.user);
        }).catch(err => {
          console.log('Error loading users');
        });
      }else{
      }

    });

  }




}
