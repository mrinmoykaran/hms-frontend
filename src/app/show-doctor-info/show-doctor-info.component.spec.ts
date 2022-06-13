import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDoctorInfoComponent } from './show-doctor-info.component';

describe('ShowDoctorInfoComponent', () => {
  let component: ShowDoctorInfoComponent;
  let fixture: ComponentFixture<ShowDoctorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDoctorInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDoctorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
