import { Component, OnInit } from '@angular/core';
import {SerieService} from "../../services/serie/serie.service";
import {Router} from "@angular/router";
import {Serie} from "../../models/serie.model";

@Component({
  selector: 'app-new-serie-view',
  templateUrl: './new-serie-view.component.html',
  styleUrls: ['./new-serie-view.component.css']
})
export class NewSerieViewComponent implements OnInit {

  constructor(private serieService: SerieService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addSerie(serieToAdd: Serie) {
    this.serieService
      .addSerie(serieToAdd)
      .then(() => {
        this.router.navigateByUrl('home')
      })
  }
}
