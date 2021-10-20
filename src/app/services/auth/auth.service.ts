import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<string>;

  constructor() {
    this.token = new BehaviorSubject<string>('');
  }
// SignIn condition to auth
  signin(username: string, password: string): Promise<void | string> {

    return new Promise<void | string>(
      (res, rej) => {
        setTimeout(() => {
          if(username === 'Administrateur' && password === 'azerty') {
            this.token.next('password');
            res();
          } else {
            rej('les identifiants sont incorrect');
          }
        },300);

      }
    )
  }

  signout(): Promise<void> {
    return new Promise<void>(
      (res, rej) => {
        this.token.next('')
        res();
      }
    );
  }

}
