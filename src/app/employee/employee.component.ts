import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../roooms/service/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // providers:[RoomsService]
})
export class EmployeeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  empName: string="john";

  constructor( private roomsService : RoomsService){

  }
}
