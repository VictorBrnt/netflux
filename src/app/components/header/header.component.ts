import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AuthService} from "../../services/auth/auth.service";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isConnected: boolean;
  isAddPage: boolean;

  tokenSub: Subscription;
  routerEventSub: Subscription;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {

    this.routerEventSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((e:any) => {
      if (e.url === '/series/new') {
        this.isAddPage = true;
      }
      else {
        this.isAddPage = false;
      }
    })

    this.tokenSub = this.authService.token.subscribe((
      token: string) => {
      if(token) {
        this.isConnected = true;
      } else{
        this.isConnected = false;
      }
    });
  }

  onClickSignOut() {
    this.authService
      .signout()
      .then(() => {
        this.router.navigateByUrl('auth')
      })
  }

  ngOnDestroy() {
    this.tokenSub.unsubscribe();
  }
}
