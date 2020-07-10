import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientmedicalComponent } from './auth/patientmedical/patientmedical.component';
import { ResultComponent } from './auth/result/result.component';


const routes: Routes = [
  {path: 'result/:id' , component : ResultComponent},
  // {path: 'patientmedical' , component : PatientmedicalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
