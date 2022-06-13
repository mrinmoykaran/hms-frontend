import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../app.component';
import { Appoinment } from '../appoinment';
import { DoctorService } from '../doctor.service';
import { Patient } from '../patient';




@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})

export class CreatePatientComponent implements OnInit {
  @ViewChild('myForm', {static: false}) myForm: NgForm|any;
  patient:Patient=new Patient();
  newPatientID:number=0;
  appoinment:Appoinment|undefined;
  SpecializationList: any;
  DoctorList: any;
  SelectedDoctorID:number=0;
  constructor(private toastr: ToastrService,private service:DoctorService,private router:Router) { 

  }

  ngOnInit(): void {
    this.service.getDoctorList().subscribe((data: any) => {
      this.DoctorList = data;
    })
  }



  showSuccess(patientID:number) {
    this.toastr.success('', 'New Patient Created Successfully with patient id: '+patientID, {
      positionClass: 'toast-bottom-right'
   });
  }

  showWarning() {
    this.toastr.warning('', 'Oops! enter the details properly.', {
      positionClass: 'toast-top-right'
    });
  }

  onChange(event:any)
  {
    
   console.log(event.value);
   this.SelectedDoctorID=event.value;

  }

  getcompanyid(e:any){
    console.log(e.target.id);
}
  onSubmit(){
    if(this.patient.age!=0 && this.patient.date_of_visit!=null && this.patient.visited_doctor!=null && this.patient.full_name!=null)
    {
    console.log(this.patient);
    this.service.createPatient(this.patient).subscribe( res =>{
    
      //this.patient=data;
      this.showSuccess(res.id);
      this.myForm.resetForm();

      
      //TODO increment the patient attended of the doctor

      this.incrementDoctorCounter(res.id,this.SelectedDoctorID);
      
    },
    error => 
    {
      console.log(error);
      this.showWarning();
    }
    );
  }
  else{
    this.showWarning();
  }
  }

  incrementDoctorCounter(patientID:number,doctorID:number)
  {
    //make api call to increase the counter
   this.appoinment=new Appoinment(patientID,doctorID);
    this.service.increPatientAttended(this.appoinment).subscribe( res =>{
      
      console.log(res);

      
    },
    error => 
    {
      console.log(error);
      this.showWarning();
    }
    );

  }

  

 

  
}
