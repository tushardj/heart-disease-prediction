import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-patientregi',
  templateUrl: './patientregi.component.html',
  styleUrls: ['./patientregi.component.css']
})
export class PatientregiComponent implements OnInit {

  constructor(public doctorService: DoctorService,
    private router: Router) { }

  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.doctorService.form1.controls;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log("this.dos");
    if (this.doctorService.form1.valid) {
      // if (this.doctorService.form1.get('$key').value == null) {
      console.log("inserting patient values", this.doctorService.form1.value);
      this.doctorService.insertPatient(this.doctorService.form1.value);
      // }


      this.showSuccessMessage = true;

      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.doctorService.form.reset();
      this.router.navigate(['/', 'combine-list']);
      //this is to be done for proper reset operation

      this.doctorService.form.setValue({
        $key: null,
        PfullName: '',
        Pemail: '',
        Pmobile: '',
        PAddress: '',
        age: '',
        gender: '',
        CP: '',
        sugar: '',
        BP: '',
        chlorestrol: '',

        restcg: '',
        exang: '',
        trestbps: '',
        oldpeak: '',
        slope: '',
        CA: '',
        thal: '',
        fbs: '',
        medical: ''
      });
    }
  }
}
