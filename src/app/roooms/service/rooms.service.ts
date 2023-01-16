import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../roooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appConfig.service';
import { AppConfig } from '../../AppConfig/appConfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList:RoomList[]=[
    {
    roomNumber : 301,
    roomType : 'Deluxe room',
    amenties :'Air Conditioner, Free WiFi, Kitchen, BathRoom',
    price: 1000,
    photos: 'https://tse1.mm.bing.net/th?id=OIP.PK8GlSMGnLDX8ONV_-sR1gHaFj&pid=Api&P=0',
    checkInTime : new Date('11-Nov-2022'),
    checkOutTime:  new Date('11-Nov-2022'),
    rating : 2.5
  },
  {
    roomNumber : 101,
    roomType : 'Half Deluxe room',
    amenties : 'Air Conditioner, Free WiFi, Kitchen, BathRoom',
    price : 2000,
    photos : 'https://tse2.mm.bing.net/th?id=OIP.n7elxOHzO-q6Q5_jsZZX5wHaFj&pid=Api&P=0',
    checkInTime : new Date('11-Nov-2022'),
    checkOutTime :  new Date('11-Nov-2022'),
    rating : 3.5
  },
  {
    roomNumber : 201,
    roomType: 'private suite',
    amenties: 'Air Conditioner, Free WiFi, Kitchen, BathRoom',
    price : 3000,
    photos: 'https://tse2.mm.bing.net/th?id=OIP.mCKimPuLLPSBLN2_hao7BgHaEK&pid=Api&P=0',
    checkInTime: new Date('11-Nov-2022'),
    checkOutTime:  new Date('11-Nov-2022'),
    rating : 4.5
  }
]

  constructor(@Inject (APP_SERVICE_CONFIG) private config:AppConfig,
    private http:HttpClient
  ) {
  
    console.log("Rooms Service Initialized...")
   }
   getRooms(){
    return this.roomList;
   }

}
