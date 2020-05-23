import {Injectable} from '@angular/core';
import {Travel} from "../entity/travel.entity";
import {User} from "../entity/user.entity";
import {Booking} from "../entity/booking.entity";
import {USER_KEY} from "../app.component"
import {BOOKING_KEY} from "../app.component"

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  travel: Travel;
  user: User[];
  booking: Booking[];


  constructor() {

    this.booking = [
      {
        nbPerson: 0,
        startDate: '',
        additionalInfos: ''
      }
    ];

    this.user = [
      {
        name: '',
        adress: '',
        email: '',
        phone: ''
      }
    ];
  }


  addUser(user: User) {
    this.user.unshift(user);

    localStorage.setItem(USER_KEY, JSON.stringify(this.user));
  }

  addBooking(booking: Booking) {
    localStorage.setItem(BOOKING_KEY, JSON.stringify((this.booking)))
  }

}
