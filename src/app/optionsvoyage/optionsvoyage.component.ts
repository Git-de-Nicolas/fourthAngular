import {Component, OnInit} from '@angular/core';
import {Booking} from "../entity/booking.entity";
import {BookingService} from "../service/booking.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-optionsvoyage',
  templateUrl: './optionsvoyage.component.html',
  styleUrls: ['./optionsvoyage.component.scss']
})
export class OptionsvoyageComponent implements OnInit {

  newBooking: Booking = new Booking();

  constructor(private bookingService: BookingService, private router: Router) {

  }

  ngOnInit(): void {
  }

  addBooking() {
    this.bookingService.addBooking(this.newBooking);

    this.router.navigate(['resumereservation']);
  }

}
