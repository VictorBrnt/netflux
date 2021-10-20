import {Component, Input, OnInit} from '@angular/core';
import {Serie} from "../../models/serie.model";
import {ActivatedRoute} from "@angular/router";
import {SerieService} from "../../services/serie/serie.service";

@Component({
  selector: 'app-single-serie-view',
  templateUrl: './single-serie-view.component.html',
  styleUrls: ['./single-serie-view.component.css']
})
export class SingleSerieViewComponent implements OnInit {

  @Input() series: Array<Serie>


  serie: Serie;

  constructor(private route: ActivatedRoute,
              private serieService: SerieService) { }

  ngOnInit(): void {
    //get information trough the serie clicked
    const id = this.route.snapshot.params.id;
    this.serieService.getSerieById(+id)
      .then(
        (serie: Serie) => {this.serie = serie;}
      )
  }

}
