import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  constructor(private doctorService: DoctorService) { }

  doctorArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";

  ngOnInit() {
    this.doctorService.getDoctors().subscribe(
      list => {
        this.doctorArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
    // console.log("this.doctorArray", this.doctorArray);
  }

  onDelete($key) {
    if (confirm('Are you sure to cancel this doctor ?')) {
      this.doctorService.deleteDoctor($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

  filterCondition(doctor) {
    return doctor.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
}

