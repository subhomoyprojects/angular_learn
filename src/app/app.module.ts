import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// end bootstrap

// material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material'; // Its For icon Metarial

// Multy Select Form 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
 // For Multy Select

 // For Chip Tag
 import {MatChipsModule} from '@angular/material/chips';
 import {MatAutocompleteModule} from '@angular/material';
 // For Chip Tag End

 // For Owl Carousel
import { CarouselModule } from 'ngx-owl-carousel-o';

// end material


import { AppComponent } from './app.component';
import { Step1Component } from './registration/step1/step1.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { SubscriptionComponent } from './registration/subscription/subscription.component';
import { HeaderComponent } from './registration/header/header.component';
import { FooterComponent } from './registration/footer/footer.component';
import { BasicdetailsComponent } from './registration/basicdetails/basicdetails.component';
import { AdddrinksComponent } from './registration/adddrinks/adddrinks.component';
import { AddmoreinformationComponent } from './registration/addmoreinformation/addmoreinformation.component';
import { AddoffersComponent } from './registration/addoffers/addoffers.component';
import { HappyhoursComponent } from './registration/happyhours/happyhours.component';
import { RegistrationcompletedComponent } from './registration/registrationcompleted/registrationcompleted.component';
import { AddfoodsComponent } from './registration/addfoods/addfoods.component';
import { DrinkcategoryComponent } from './registration/drinkcategory/drinkcategory.component';

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    SubscriptionComponent,
    HeaderComponent,
    FooterComponent,
    BasicdetailsComponent,
    AdddrinksComponent,
    AddmoreinformationComponent,
    AddoffersComponent,
    HappyhoursComponent,
    RegistrationcompletedComponent,
    AddfoodsComponent,
    DrinkcategoryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, // For Multy Select
    ReactiveFormsModule, // For Multy Select
    MatSelectModule, // For Multy Select
    MatChipsModule, // For Chip Tag
    MatIconModule, // For Metarial Icon (It is for metarial icon)
    MatAutocompleteModule, // Auto Complete Chip
    CarouselModule // For Owl Carousel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
