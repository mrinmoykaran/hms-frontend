import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShowDoctorInfoComponent } from './show-doctor-info/show-doctor-info.component';
import { ShowPatientInfoComponent } from './show-patient-info/show-patient-info.component';

const routes: Routes = [
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'create-patient', component: CreatePatientComponent},
  {path: 'add-doctor', component: AddDoctorComponent},
  {path: 'show-doctor-info', component: ShowDoctorInfoComponent},
  {path: 'show-patient-info', component: ShowPatientInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
