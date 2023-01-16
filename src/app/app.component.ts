import {  Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewChildren, } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LoggerService } from './logger.service';
// import { RooomsComponent } from './roooms/roooms.component';
import {LocalStorageToken} from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'hoteninventoryapp';

  role= "Admin";

  @ViewChild('name',{static:true}) name!:ElementRef;

  constructor(@Optional() private loggerService: LoggerService,
  @Inject(LocalStorageToken) private localStorage: Storage){

  }


  ngOnInit(){
    this.loggerService?.Log('AppComponent.ngOnInit()');
   this.name.nativeElement.innerText="Welcome to Hotel";

   this.localStorage.setItem('name',JSON.stringify("Edwin"));
  }
  // @ViewChild("user",{read:ViewContainerRef}) vcr!:ViewContainerRef
  // ngAfterViewInit(): void { 
  //   const componentRef = this.vcr.createComponent(RooomsComponent);
  //   componentRef.instance.numberOfRooms=50;
  // }
}
