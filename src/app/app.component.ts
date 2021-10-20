import {Component, ViewEncapsulation} from '@angular/core';
import {SerieService} from "./services/serie/serie.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  title = 'netflux';

  constructor(private serieService: SerieService) {
  }
}
