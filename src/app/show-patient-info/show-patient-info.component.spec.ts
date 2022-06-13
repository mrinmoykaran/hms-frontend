import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPatientInfoComponent } from './show-patient-info.component';

describe('ShowPatientInfoComponent', () => {
  let component: ShowPatientInfoComponent;
  let fixture: ComponentFixture<ShowPatientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPatientInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPatientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
