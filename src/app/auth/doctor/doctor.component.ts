import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  constructor(public doctorService: DoctorService, private router: Router) { }

  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.doctorService.form.controls;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    if (this.doctorService.form.valid) {
      if (this.doctorService.form.get('$key').value == null) {
        console.log("if", this.doctorService.form.value);

        this.doctorService.insertDoctor(this.doctorService.form.value);
      }
      else {
        console.log("else");

        this.doctorService.updateDoctor(this.doctorService.form.value);
      }

      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.doctorService.form.reset();
      this.router.navigate(['/', 'doctor-list']);

      //this is to be done for proper reset operation
      this.doctorService.form.setValue({
        $key: null,
        fullName: '',
        email: '',
        mobile: '',
        location: '',
        spListDoc: ''
      });
    }
  }
}
