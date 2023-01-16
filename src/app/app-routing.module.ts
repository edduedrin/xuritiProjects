import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RooomsComponent } from './roooms/roooms.component';

const routes: Routes = [

  {path:"employee", component: EmployeeComponent },
  {path:"room",component:RooomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
