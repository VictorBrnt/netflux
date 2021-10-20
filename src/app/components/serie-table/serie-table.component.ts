import {Component, Input, OnInit} from '@angular/core';
import {Serie} from "../../models/serie.model";

@Component({
  selector: 'app-serie-table',
  templateUrl: './serie-table.component.html',
  styleUrls: ['./serie-table.component.css']
})
export class SerieTableComponent implements OnInit {

  @Input() series: Array<Serie>;

  constructor() { }

  ngOnInit(): void {

  }

}
