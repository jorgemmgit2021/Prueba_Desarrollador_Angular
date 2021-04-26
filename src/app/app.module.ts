import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecurityService } from './security/security.service';
import { LoginComponent } from './security/login.component';
import { AuthGuard } from './security/auth.guard';
import { ManagementComponent } from './management/management.component';
import { DisplaycontrolDirective } from './displaycontrol.directive';
import { AircraftComponent } from './aircraft/aircraft.component';
import { AircraftEditComponent } from './aircraft/aircraft-edit.component';
import { TravelComponent } from './travel/travel.component';
import { TravelEditComponent } from './travel/travel-edit.component';
import { AircraftService } from './aircraft/aircraft.service';
import { TravelService } from './travel/travel.service';
import { ManagementService } from './management/management.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ManagementComponent,
    DisplaycontrolDirective,
    AircraftComponent,
    AircraftEditComponent,
    TravelComponent,
    TravelEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SecurityService, AuthGuard, AircraftService, TravelService, ManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
