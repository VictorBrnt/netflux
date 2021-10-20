import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFormsComponent } from './error-forms.component';

describe('ErrorFormsComponent', () => {
  let component: ErrorFormsComponent;
  let fixture: ComponentFixture<ErrorFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
