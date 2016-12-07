import { Component } from '@angular/core';
import {Books} from '../books/books';
// import { NavController } from 'ionic-angular';
import {UsersService} from '../../providers/users-service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
  providers: [UsersService]
})
export class Auth {
  booksPage = Books;
  users: any;

  constructor(private usersService: UsersService) {

  }

  ionViewDidLoad(){
    this.usersService.get().then(data => {
        this.users = data;
        console.log(this.users);
    }).catch(err => {
      console.log('Error loading users');
    });
  }

}
