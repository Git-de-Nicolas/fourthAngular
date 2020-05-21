import {Injectable} from '@angular/core';
import {Travel} from "../entity/travel.entity";

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  travels: Travel[];

  constructor() {
    this.travels = [
      {
        place: 'Italie',
        description: 'Superbe voyage en Italie',
        nbDays: 7,
        pricePerPerson: 100,
        coverURL: 'https://www.fodors.com/wp-content/uploads/2019/03/01_20GorgeousSidetownsinItaly__Positano_shutterstock_702788542-768x512.jpg'
      },
      {
        place: 'Islande',
        description: 'Superbe voyage en Islande',
        nbDays: 5,
        pricePerPerson: 200,
        coverURL: 'https://media.trendy.letudiant.fr/article-11085-global_thumb-f7/media.jpg'
      },
      {
        place: 'Espagne',
        description: 'Superbe voyage en Espagne',
        nbDays: 12,
        pricePerPerson: 75,
        coverURL: 'https://www.insuremytrip.com/resources/29337/spain_travel_insurance_seville.jpg'
      }
    ];
  }

  getTravel(idx: number): Travel {
    return this.travels[idx];
  }

}
