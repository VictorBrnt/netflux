import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  errMsg: string;

  username: string;
  password: string;

  constructor(private authService: AuthService,
              private router: Router) {

  }

  ngOnInit(): void {
  }

  onSubmitAuthForm() {

    this.authService
      .signin(this.username, this.password)
      .then(() => {
        this.router.navigateByUrl('home');

      })
      .catch((errMsg: string) => {
        this.errMsg = errMsg;
      });
  }

}
