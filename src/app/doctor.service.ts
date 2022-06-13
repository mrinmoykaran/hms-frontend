import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { Specialization } from './specialization';
import { Patient } from './patient';
import { Appoinment } from './appoinment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL = "http://localhost:8090/api/v1/";
  
  constructor(private httpClient: HttpClient) { }

  createDoctor(doctor: Doctor): Observable<Object>{
    
    return this.httpClient.post(`${this.baseURL}doctors`, doctor);
  }

  increPatientAttended(appoinment: Appoinment): Observable<Object>{
    
    return this.httpClient.post(`${this.baseURL}appoinment`, appoinment);
  }

  createPatient(patient: Patient): Observable<any>{
    return this.httpClient.post(`${this.baseURL}patients`, patient);
  }

  getDoctorList():Observable<any[]>
  {
    return this.httpClient.get<any>(this.baseURL+'doctors');
  }

  getDoctorById(id: number): Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.baseURL}doctors/${id}`);
  }

  getPatientById(id: number): Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL}patients/${id}`);
  }

  getSpecializationByID(id:number): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseURL}specialization/${id}`);
  }

  getAppinmentCount(id:number): Observable<number>{
    return this.httpClient.get<number>(`${this.baseURL}appoinment/${id}`);
  }

}
