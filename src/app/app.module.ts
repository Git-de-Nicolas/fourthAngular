import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CoordonneesComponent } from './coordonnees/coordonnees.component';
import { OptionsvoyageComponent } from './optionsvoyage/optionsvoyage.component';
import { ResumereservationComponent } from './resumereservation/resumereservation.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { Erreur404Component } from './erreur404/erreur404.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CoordonneesComponent,
    OptionsvoyageComponent,
    ResumereservationComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    Erreur404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
