import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from '../doctor';

import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-show-doctor-info',
  templateUrl: './show-doctor-info.component.html',
  styleUrls: ['./show-doctor-info.component.css']
})
export class ShowDoctorInfoComponent implements OnInit {
  DoctorList: any;
  SelectedDoctorID: any = -1;
  SpecializationList: any;
  patientAttended:number=0;
  doctor: any;
  isShown: boolean = false; // hidden by default


  changeDoctor(e: any) {
    console.log(e.target.value);
    this.SelectedDoctorID = e.target.value;
  }
  constructor(private service: DoctorService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.service.getDoctorList().subscribe((data: any) => {
      this.DoctorList = data;
    })
  }

  showSuccess() {
    this.toastr.success('', 'Displaing information about Dr. Mrinmoy Karan.', {
      positionClass: 'toast-top-right'
    });
  }

  showWarning() {
    this.toastr.warning('', 'Choose doctor name from dropdown first.', {
      positionClass: 'toast-top-right'
    });
  }

  getDoctorInfo() {
    if (this.SelectedDoctorID != -1) {
      this.toastr.success('', "Displaing information of doctor with Doctor ID :  " + this.SelectedDoctorID, {
        positionClass: 'toast-top-right'
      });



      this.doctor = new Doctor();
      this.service.getDoctorById(this.SelectedDoctorID).subscribe(data => {
        this.doctor = data;

        this.getSpecializationByID(this.SelectedDoctorID);
        this.getAppoinmentCount(this.SelectedDoctorID);
        console.log(this.doctor);

        this.isShown = true;

        //getting number of appoinments
        


      });

  


    }
    else {
      this.isShown = false;
      this.showWarning();
    }


  }

  getSpecializationByID(id: number) {

    this.service.getSpecializationByID(id).subscribe((data: any) => {
      this.SpecializationList = data;
      console.log(this.SpecializationList);
    })
  }

  getAppoinmentCount(doctorID:number)
  {
    this.service.getAppinmentCount(doctorID).subscribe((data: number) => {
      this.patientAttended=data;
      console.log(this.patientAttended);
     
    })
  }


}
