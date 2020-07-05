import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { PatientregiComponent } from './patientregi/patientregi.component';
import { PatientmedicalComponent } from './patientmedical/patientmedical.component';
import { ResultComponent } from './result/result.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [LoginComponent, LogoutComponent, RegistrationComponent, DoctorComponent, DoctorListComponent, PatientregiComponent, PatientmedicalComponent, ResultComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ]
})
export class AuthModule { }
