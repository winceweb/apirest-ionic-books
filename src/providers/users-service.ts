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

  constructor(public http: Http) {
    console.log('Hello UsersService Provider');
  }

  get(){
    return this.http.get('http://localhost:4000/users');
  }

}
