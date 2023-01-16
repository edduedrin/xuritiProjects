import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './roooms';
import { RoomsService } from './service/rooms.service';

@Component({
  selector: 'app-roooms',
  templateUrl: './roooms.component.html',
  styleUrls: ['./roooms.component.scss']
})
export class RooomsComponent implements OnInit, DoCheck,AfterViewInit, AfterViewChecked {

  hotelName = 'Hilton Hotel';
  numberOfRooms =5;
  hideRooms = false;


  rooms?: Room = {
    TotalRoomsAvaible: 10,
    availableRooms: 5,
    bookedRooms: 3
  };



  roomList: RoomList[] = [];

  stream = new Observable<string>(observer=>{
    observer.next("user 1");
    observer.next("user 2");
    observer.next("user 3");
    observer.next("user 4");
    observer.complete();
    observer.error("Error occured");
  })

  title ="room list";

  selectedRoom! :RoomList;

  @ViewChild(HeaderComponent,{static: true}) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>

  // roomService = new RoomsService();
  constructor(@SkipSelf() private roomsService: RoomsService) {

  }

  ngOnInit(): void {
    this.roomList= this.roomsService.getRooms();
    
      this.stream.subscribe({
        next:(value)=> console.log(value),
        complete:()=>console.log('complete'),
        error:(err)=>console.log(err)
      });
    // this.stream.subscribe((data)=>console.log(data));
    
  }

  ngAfterViewChecked(): void { }
  ngAfterViewInit(): void {
    this.headerComponent.title="Rooms";

    // this.headerChildrenComponent.last.title="Last Title";

    // this.headerChildrenComponent.get(0).title = "First Title";
  }
  ngDoCheck(): void {
    console.log('on change is called.......')
  }



  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "no title"
  }

  selectRoom(room: RoomList){
    this.selectedRoom=room;
  }

  addRoom(){
    const room: RoomList={
      roomNumber : 401,
      roomType : 'Deluxe room',
      amenties :'Air Conditioner, Free WiFi, Kitchen, BathRoom, cleaning service',
      price: 7000,
      photos: 'https://tse1.mm.bing.net/th?id=OIP.PK8GlSMGnLDX8ONV_-sR1gHaFj&pid=Api&P=0',
      checkInTime : new Date('11-Nov-2022'),
      checkOutTime:  new Date('11-Nov-2022'),
      rating : 5
    };
    this.roomList=[...this.roomList,room];
  }
}


