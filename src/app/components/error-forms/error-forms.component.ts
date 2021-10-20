import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, NgModel} from "@angular/forms";

@Component({
  selector: 'app-error-forms',
  templateUrl: './error-forms.component.html',
  styleUrls: ['./error-forms.component.css']
})
export class ErrorFormsComponent implements OnInit {

  @Input() control: AbstractControl | NgModel;
  @Input() controlLabel: string;


  constructor() { }

  ngOnInit(): void {
  }

}
