import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../auth/doctor.service';

@Component({
  selector: 'app-combine-list',
  templateUrl: './combine-list.component.html',
  styleUrls: ['./combine-list.component.css']
})
export class CombineListComponent implements OnInit {
  router: any;

  constructor(private doctorService: DoctorService) { }
  patientArray = [];
  mediArray = [];

  showDeletedMessage: boolean;
  searchText: string = "";

  ngOnInit() {
    this.doctorService.getPatientdetails().subscribe(
      list => {
        this.patientArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
    this.doctorService.getPatient().subscribe(
      list => {
        this.mediArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
    console.log("this patient", this.patientArray);
    console.log("this mediArray", this.mediArray);

  
    }
  }
  