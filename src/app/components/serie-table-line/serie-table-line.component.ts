import {Component, Input, OnInit} from '@angular/core';
import {SerieService} from "../../services/serie/serie.service";

@Component({
  selector: '[app-serie-table-line]',
  templateUrl: './serie-table-line.component.html',
  styleUrls: ['./serie-table-line.component.css']
})
export class SerieTableLineComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() release: string;

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
  }

  deleteSerie() {
    this.serieService.deleteSerie(this.id);
  }

}
