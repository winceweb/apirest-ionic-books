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

  allUsers: any;

  constructor(private usersService: UsersService) {

  }

  ionViewDidLoad(){
    this.usersService.get().map(
      response => response.json())
      .subscribe(
        response => {
            console.log(response);
        }
      );
  }

}
