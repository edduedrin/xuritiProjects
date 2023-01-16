import { ChangeDetectionStrategy, Component , EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import { RoomList } from '../roooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit, OnChanges, OnDestroy {
  
  @Input() rooms : RoomList[]=[];

  @Input() title: string='';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor(){}
  ngOnDestroy() {
   console.log("On destroy is called ")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      this.title= changes['title'].currentValue.toUpperCase();
    }
  }
  ngOnInit(): void { }

  selectRoom(room:RoomList){
    this.selectedRoom.emit(room);
  }
 
  
}
