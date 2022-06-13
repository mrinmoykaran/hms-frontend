export class Appoinment {
    appoinment_id:number=0;
	doctor_id:number=0;
	patient_id:number=0;

	constructor(patient_id:number,doctor_id:number)
	{
		this.patient_id=patient_id;
		this.doctor_id=doctor_id;
	}
}
