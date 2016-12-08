import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsersService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsersService {

  users: any;
  user: any;
  book: any;

  constructor(public http: Http) {
    console.log('Hello UsersService Provider');
  }

  get() {
    return new Promise(resolve => {
      this.http.get('http://localhost:4000/users')
      .map(result => result.json())
      .subscribe(result => {
          this.users = result;
          resolve(this.users);
      })
    });
  }

  getUser(userId){
    return new Promise(resolve => {
      this.http.get('http://localhost:4000/users/'+userId)
      .map(result => result.json())
      .subscribe(result => {
          this.user = result;
          resolve(this.user);
      })
    });
  }

  login(loginDatas) {
    return new Promise(resolve => {
      this.http.post('http://localhost:4000/auth', loginDatas)
      .map(result => result.json())
      .subscribe(result => {
          this.user = result;
          resolve(this.user);
      })
    });
  }

  bookRead(idBook, idUser) {
    return new Promise(resolve => {
      this.http.get('http://localhost:4000/users/'+idUser+'/read/'+idBook)
      .map(result => result.json())
      .subscribe(result => {
          this.book = result;
          resolve(this.book);
      })
    });
  }


}
