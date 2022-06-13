import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { ShowDoctorInfoComponent } from './show-doctor-info/show-doctor-info.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ShowPatientInfoComponent } from './show-patient-info/show-patient-info.component';
import { CommonModule } from '@angular/common';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreatePatientComponent,
    ShowDoctorInfoComponent,
    ShowPatientInfoComponent,
    AddDoctorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CommonModule,
    FormsModule
  ],

  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
