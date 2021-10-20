import {Component, OnDestroy, OnInit} from '@angular/core';
import {Serie} from "../../models/serie.model";
import {SerieService} from "../../services/serie/serie.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-serie-view',
  templateUrl: './serie-view.component.html',
  styleUrls: ['./serie-view.component.css']
})
export class SerieViewComponent implements OnInit, OnDestroy {

  series: Array<Serie>;
  seriesSub: Subscription;

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
//Subscribe the behaviorSubject Serie to use it
    this.seriesSub = this.serieService
      .series
      .subscribe(
        (series: Array<Serie>) => {
          this.series = series
        }
      );
  }

  // unsubscribe to avoid leak memory
  ngOnDestroy() {
    this.seriesSub.unsubscribe()
  }
}
