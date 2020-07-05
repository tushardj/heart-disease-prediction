
import { Component, OnInit, NgModule } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PredictClass } from 'src/app/predict-class';
import { PredictServiceService } from 'src/app/predict-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-patientmedical',
  templateUrl: './patientmedical.component.html',
  styleUrls: ['./patientmedical.component.css']
})
export class PatientmedicalComponent implements OnInit {
  title = 'form-tutorial';
  predictData = new PredictClass(54,11,1,1,1,1,1,1,1,1,1,1,1,1);
  predictOutput = '';
  constructor(
    private _predictService : PredictServiceService,
    private _router:Router,
    private formsModule:FormsModule
    ){}
  ngOnInit(){
  }
  onSubmit(){
    this._predictService.predict(this.predictData)
    .subscribe(
      data => this._router.navigate(['result', data]),
      error => console.log("Error...!", error)
    )
  }
}
