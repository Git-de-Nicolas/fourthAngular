import {Component, OnInit} from '@angular/core';
import {BookingService} from "../service/booking.service";
import {User} from "../entity/user.entity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-coordonnees',
  templateUrl: './coordonnees.component.html',
  styleUrls: ['./coordonnees.component.scss']
})
export class CoordonneesComponent implements OnInit {

  newUser: User = new User();

  constructor(private bookingService: BookingService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addUser() {
    this.bookingService.addUser(this.newUser);

    this.router.navigate(['optionsvoyage']);
  }
}


// Enregistrer le Travel et le User pour le moment
