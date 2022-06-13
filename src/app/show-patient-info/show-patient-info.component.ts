import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-show-patient-info',
  templateUrl: './show-patient-info.component.html',
  styleUrls: ['./show-patient-info.component.css']
})
export class ShowPatientInfoComponent implements OnInit {

  patient:any;
  patientID:any;
  isShown: boolean = false;
  username: string = '';
  doctorName: string = '';
  doctor:Doctor=new Doctor();

  constructor(private service: DoctorService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  
  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
   // link.setAttribute('href', 'http://localhost:4200/assets/images/Male.png');
    link.setAttribute('download', `prescription.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}

getPatientInfo()
{

if (this.patientID != undefined) {
      

      this.patient = new Patient();
      this.service.getPatientById(this.patientID).subscribe(data => {
        
        this.patient = data;
        this.isShown = true;
        console.log("Response : ",this.patient);

        this.service.getDoctorById(this.patient.visited_doctor).subscribe(data => {
          this.doctor = data;
        
          console.log(this.doctor);

         
        });
       
      },error=>{
        if(error.status==404)
        {
          this.isShown = false;
        this.showWarning();
        }
        
      });
      
      //Get doctor name




     
      
    }
    else {
      this.isShown = false;
      this.showWarning();
    }
}



openPrescription()
{
  console.log(this.patient.prescriptionUrl);

  window.open(this.patient.prescriptionUrl, 'winname', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=700,height=400');
}

showWarning() {
  this.toastr.warning('', 'No such patient there in the database.', {
    positionClass: 'toast-top-right'
  });
}



}
