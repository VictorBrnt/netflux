import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Serie} from "../../models/serie.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.component.html',
  styleUrls: ['./serie-form.component.css']
})
export class SerieFormComponent implements OnInit {

  @Input() title: string;
  @Input() release: string;
  @Input() season: number;
  @Input() review: string;
  @Input() picture: string
  @Input() serieToEdit: Serie | undefined;

  @Input() submitLabel: string;

  @Output() formSubmitted: EventEmitter<Serie>;

  serieForm: FormGroup;
  serie: Serie;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Serie>();
  }

  ngOnInit(): void {

    this.initForm(); {
      if(this.serieToEdit) {
        this.serie = this.serieToEdit;
      }
      else {
        this.serie = new Serie('','',1,'','http://','')
      }
    }
  }

  onSubmitSerieForm() {
    if (this.serieForm.valid) {
      this.formSubmitted.emit(this.serie)
    }
  }

  private  initForm() {
    this.serieForm = this.fb.group({
      title: new FormControl(null,[
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(1)
      ]),
      release: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.max(2021),
        Validators.min(1950)
      ]),
      season: new FormControl(1, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ]),
      review: new FormControl(null, [
        Validators.required,
      ]),
      picture: new FormControl("http://", [
        Validators.required
      ])


    });
  }

}
