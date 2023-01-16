export interface Room{
    TotalRoomsAvaible?: number;
    availableRooms?: number;
    bookedRooms?:number;
}

export interface RoomList{
    roomNumber : number;
    roomType : string ;
    amenties : string ;
    price : number;
    photos: string;
    checkInTime: Date;
    checkOutTime: Date;
    rating: number;
}