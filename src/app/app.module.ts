import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from '../routes';
import { environment } from '../environments/environment';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';



import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { DoctorComponent } from './auth/doctor/doctor.component';
import { DoctorListComponent } from './auth/doctor-list/doctor-list.component';
import { PatientregiComponent } from './auth/patientregi/patientregi.component';
import { PatientmedicalComponent } from './auth/patientmedical/patientmedical.component';
import { CombineListComponent } from './combine-list/combine-list.component';
import { ResultComponent } from './auth/Result/result.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RegistrationComponent,
    LoginComponent,
    LogoutComponent,
    NavbarComponent,
    DoctorComponent,
    DoctorListComponent,
    PatientregiComponent,
    PatientmedicalComponent,
    CombineListComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
