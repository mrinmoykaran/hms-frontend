import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Specialization } from '../specialization';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  
  @ViewChild('myForm', {static: false}) myForm: NgForm|any;
  doctor:Doctor=new Doctor();
  specializationString:string="";
  specializationList:specialization[]=[];
  tempArr:string[]=[];
  
  

  constructor(private toastr: ToastrService,private service:DoctorService,private router:Router) { }

  ngOnInit(): void {
    this.getSpecializations();
  }

  
  onSubmit()
  {
    
    console.log(this.doctor);
    
    if(this.doctor.age!=0 && this.doctor.full_name!="" && this.doctor.gender!="" && this.fetchCheckedIDs()=="")
    {
      
      this.service.createDoctor(this.doctor).subscribe( data =>{
      this.showSuccess();
      this.myForm.resetForm();
      // (<HTMLFormElement>document.getElementById("patientRegistrationForm")).reset();
      // this.router.navigate(['/home-page']);

    },
    error => 
    {
      console.log(error);
      this.showWarning();
    }
    );
 
  }
  else{
   // console.log(this.doctor);
    this.showWarning();
  }
   
  }

  fetchCheckedIDs() {
    this.specializationString="";
    this.specializationList.forEach((value, index) => {
      if (value.isSelected) {
       // this.checkedIDs.push(value.id);
       this.specializationString+=value.area+" ";
       
      }
    });
    return this.specializationString;
  }

  getSpecializations()
  {
    this.specializationList=[
      {id:1,area:"Gastreoentologist",isSelected:false},
      {id:2,area:"General Physician",isSelected:false},
      {id:3,area:"Gynocologist",isSelected:false},
      {id:4,area:"Orthopedic Surgeon",isSelected:false},
      {id:5,area:"Dentist",isSelected:false},
      {id:6,area:"Neurologist",isSelected:false}
    
    ];
  }

  onSpecChange($event:any,c:any)
  {
      console.log(this.specializationList);
      
      this.specializationString=this.fetchCheckedIDs();
  }

 

  showSuccess() {
    this.toastr.success('', 'New Doctor Created Successfully.', {
      positionClass: 'toast-bottom-right'
   });
  }

  showWarning() {
    this.toastr.warning('', 'Oops! enter the details properly.', {
      positionClass: 'toast-top-right'
    });
  }



  }
class specialization
{
  id:number=0;
  area:string="";
  isSelected:boolean=false;
}
  
  
