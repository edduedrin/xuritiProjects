import { AfterContentInit, Component, ContentChild, Host, OnInit, Optional } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../roooms/service/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  // providers:[RoomsService]
})
export class ContainerComponent implements OnInit, AfterContentInit {



  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  // constructor(@Host() private roomsService :RoomsService){}

  constructor(){}

  ngOnInit():void {}

  ngAfterContentInit():void{
    console.log(this.employee);
    this.employee.empName="rick";
    // this.employee.empName;
  }
}
