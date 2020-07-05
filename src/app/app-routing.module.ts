import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './auth/Result/result.component';
import { PatientmedicalComponent } from './auth/patientmedical/patientmedical.component';


const routes: Routes = [
  {path: 'result/:id' , component : ResultComponent},
  // {path: 'patientmedical' , component : PatientmedicalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
