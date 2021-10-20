import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guards/auth/auth.guard";
import {SerieViewComponent} from "./views/serie-view/serie-view.component";
import {NewSerieViewComponent} from "./views/new-serie-view/new-serie-view.component";
import {SingleSerieViewComponent} from "./views/single-serie-view/single-serie-view.component";
import {EditSerieViewComponent} from "./views/edit-serie-view/edit-serie-view.component";
import {AuthViewComponent} from "./views/auth-view/auth-view.component";
import {ErrorViewComponent} from "./views/error-view/error-view.component";

const routes: Routes = [
  {path: '', canActivate: [AuthGuard], component: SerieViewComponent},
  {path: 'home', canActivate: [AuthGuard], component: SerieViewComponent},
  {path: 'series/new', canActivate: [AuthGuard], component: NewSerieViewComponent},
  {path: 'series/:id', canActivate: [AuthGuard], component: SingleSerieViewComponent},
  {path: 'series/:id/edit', canActivate: [AuthGuard], component: EditSerieViewComponent},
  {path: 'auth', component: AuthViewComponent},
  {path: 'not-found', component: ErrorViewComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
