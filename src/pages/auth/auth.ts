import { Component } from '@angular/core';
import { Books } from '../books/books';
import { UsersService } from '../../providers/users-service';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
  providers: [UsersService]
})
export class Auth {
  booksPage = Books;
  users: any;
  user: any;
  userAuth: any;
  dataAuth = {}

  constructor(
    private usersService: UsersService,
    public storage: Storage,
    public navCtrl: NavController
  ) {

  }

  ionViewDidLoad(){
    // this.storage.set('token', null);
    // this.storage.set('userId', null);
    this.storage.get('userId').then((val) => {
      if(val != null){
        this.navCtrl.setRoot(Books);
      }
    });
  }

  logForm(){
    this.usersService.login(this.dataAuth).then(data => {
        this.userAuth = data;
        this.storage.set('token', this.userAuth.token);
        this.storage.set('userId', this.userAuth.id);

        this.storage.get('token').then((val) => {
          this.navCtrl.setRoot(Books);
        });

    }).catch(err => {
      console.log('Error auth user');
    });
  }

}
