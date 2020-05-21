import {Component, OnInit} from '@angular/core';
import {Travel} from "../entity/travel.entity";
import {TravelService} from "../service/travel.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  travelList: Travel[];

  travelListService: TravelService;

  constructor(travelListService: TravelService) {
    this.travelListService = travelListService;
  }

  ngOnInit(): void {
    this.travelList = this.travelListService.travels;
  }

}
