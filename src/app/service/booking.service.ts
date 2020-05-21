import {Injectable} from '@angular/core';
import {Travel} from "../entity/travel.entity";
import {User} from "../entity/user.entity";
import {Booking} from "../entity/booking.entity";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  travel: Travel;
  user: User;
  booking: Booking;

  constructor() {
  }
}
