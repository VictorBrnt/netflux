import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SerieService} from "../../services/serie/serie.service";
import {Serie} from "../../models/serie.model";

@Component({
  selector: 'app-edit-serie-view',
  templateUrl: './edit-serie-view.component.html',
  styleUrls: ['./edit-serie-view.component.css']
})
export class EditSerieViewComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private serieService: SerieService) { }

  serie: Serie;

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.serieService
      .getSerieById(+id)
      .then((serieFound: Serie) => this.serie = serieFound)
  }

  askToEditSerie(editedSerie: Serie) {
    this.serieService
      .editSerie(editedSerie)
      .then (() => {
        this.router.navigate(['series', editedSerie.id])
      })
  }

}
