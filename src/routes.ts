import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './app/about/about.component';

import { HomeComponent } from './app/home/home.component';
import { RegistrationComponent } from './app/auth/registration/registration.component';
import { LoginComponent } from './app/auth/login/login.component';
import { LogoutComponent } from './app/auth/logout/logout.component';
import { DoctorComponent } from './app/auth/doctor/doctor.component';
import { DoctorListComponent } from './app/auth/doctor-list/doctor-list.component';
import { PatientregiComponent } from './app/auth/patientregi/patientregi.component';
import { PatientmedicalComponent } from './app/auth/patientmedical/patientmedical.component';
import { CombineListComponent } from './app/combine-list/combine-list.component';


export const appRoutes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: '', component: HomeComponent },

    { path: 'home', component: HomeComponent },
    { path: 'signup', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'doctor', component: DoctorComponent },
    { path: 'doctor-list', component: DoctorListComponent },
    { path: 'patientregi', component: PatientregiComponent },
    { path: 'patientmedical', component: PatientmedicalComponent },
    { path: 'combine-list', component: CombineListComponent }

];
