import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class DoctorService {


  constructor(public firebase: AngularFireDatabase) { }

  doctorList: AngularFireList<any>;
  adddoctorList = this.firebase.list('adddoctor');
  patient = this.firebase.list('new_patient')
  patientreports = this.firebase.list('patientreports')


  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10)]),
    location: new FormControl(''),
    spListDoc: new FormControl('')
  });

  form1 = new FormGroup({
    // $key: new FormControl(null),
    PfullName: new FormControl('', Validators.required),
    Pemail: new FormControl('', Validators.email),
    Pmobile: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10)],),
    PAddress: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    CP: new FormControl(''),
    sugar: new FormControl(''),
    BP: new FormControl(''),
    chlorestrol: new FormControl(''),
    restcg: new FormControl(''),
    exang: new FormControl(''),
    trestbps: new FormControl(''),
    oldpeak: new FormControl(''),
    slope: new FormControl(''),
    CA: new FormControl(''),
    thal: new FormControl(''),
    fbs: new FormControl(''),
    medical: new FormControl('')
  });

  form2 = new FormGroup({
    $key: new FormControl(null),
    age: new FormControl(''),
    gender: new FormControl(''),
    CP: new FormControl(''),
    sugar: new FormControl(''),
    BP: new FormControl(''),
    chlorestrol: new FormControl(''),
    restcg: new FormControl(''),
    exang: new FormControl(''),
    trestbps: new FormControl(''),
    oldpeak: new FormControl(''),
    slope: new FormControl(''),
    CA: new FormControl(''),
    thal: new FormControl(''),
    fbs: new FormControl(''),
    medical: new FormControl('')
  });
  getDoctors() {
    this.doctorList = this.firebase.list('adddoctor');
    return this.doctorList.snapshotChanges();
  }

  insertDoctor(doctor) {
    console.log("list", this.doctorList);
    console.log("list", doctor);

    this.adddoctorList.push({
      fullName: doctor.fullName,
      email: doctor.email,
      mobile: doctor.mobile,
      location: doctor.location,
      spListDoc: doctor.spListDoc
    });
    console.log("list", this.doctorList);
  }

  populateForm(doctor) {
    this.form.setValue(doctor);
  }

  updateDoctor(doctor) {
    this.doctorList.update(doctor.$key,
      {
        fullName: doctor.fullName,
        email: doctor.email,
        mobile: doctor.mobile,
        location: doctor.location,
        spListDoc: doctor.spListDoc

      });
  }


  getPatient() {
    this.doctorList = this.firebase.list('new_patient');
    return this.doctorList.snapshotChanges();
  }




  deleteDoctor($key: string) {
    this.doctorList.remove($key);
  }





  insertPatient(patient) {
    console.log(patient)
    this.patient.push(patient);
  }
  getPatientdetails() {
    this.doctorList = this.firebase.list('patientreports');
    return this.doctorList.snapshotChanges();
  }



  patientinfo(patientreports) {
    console.log("INSERTING RECORDS")
    this.patientreports.push({

      page: patientreports.age,
      pgender: patientreports.gender,
      PCP: patientreports.CP,
      psugar: patientreports.sugar,
      PBP: patientreports.BP,
      pchlorestrol: patientreports.chlorestrol,
      prestcg: patientreports.restcg,
      pexang: patientreports.exang,
      ptrestbps: patientreports.trestbps,
      poldpeak: patientreports.oldpeak,
      pslope: patientreports.slope,
      PCA: patientreports.CA,
      pthal: patientreports.thal,
      pfbs: patientreports.fbs,
      pmedical: patientreports.medical
    });
  }
}