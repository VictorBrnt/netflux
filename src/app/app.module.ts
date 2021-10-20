import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SerieService} from "./services/serie/serie.service";
import { SerieTableComponent } from './components/serie-table/serie-table.component';
import { SerieTableLineComponent } from './components/serie-table-line/serie-table-line.component';
import { SerieViewComponent } from './views/serie-view/serie-view.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import {AuthService} from "./services/auth/auth.service";
import {AuthGuard} from "./guards/auth/auth.guard";
import { HeaderComponent } from './components/header/header.component';
import { SingleSerieViewComponent } from './views/single-serie-view/single-serie-view.component';
import { ErrorFormsComponent } from './components/error-forms/error-forms.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewSerieViewComponent } from './views/new-serie-view/new-serie-view.component';
import { EditSerieViewComponent } from './views/edit-serie-view/edit-serie-view.component';
import { SerieFormComponent } from './components/serie-form/serie-form.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { CommentaryFormComponent } from './components/commentary-form/commentary-form.component';
import {CommentaryService} from "./services/commentary/commentary.service";

@NgModule({
  declarations: [
    AppComponent,
    SerieTableComponent,
    SerieTableLineComponent,
    SerieViewComponent,
    AuthViewComponent,
    HeaderComponent,
    SingleSerieViewComponent,
    ErrorFormsComponent,
    NewSerieViewComponent,
    EditSerieViewComponent,
    SerieFormComponent,
    ErrorViewComponent,
    CommentaryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SerieService,
    CommentaryService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }
}
