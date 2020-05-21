import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ContactComponent} from "./contact/contact.component";
import {ResumereservationComponent} from "./resumereservation/resumereservation.component";
import {OptionsvoyageComponent} from "./optionsvoyage/optionsvoyage.component";
import {CoordonneesComponent} from "./coordonnees/coordonnees.component";
import {Erreur404Component} from "./erreur404/erreur404.component";


const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'resumereservation', component: ResumereservationComponent},
  {path: 'optionsvoyage', component: OptionsvoyageComponent},
  {path: 'coordonnees/:id', component: CoordonneesComponent},
  {path: 'not-found', component: Erreur404Component},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
