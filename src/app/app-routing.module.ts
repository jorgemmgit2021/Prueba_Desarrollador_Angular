import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './security/login.component';
import { AuthGuard } from './security/auth.guard';
import { AircraftComponent } from './aircraft/aircraft.component'
import { ManagementComponent } from './management/management.component';
import { AircraftEditComponent } from './aircraft/aircraft-edit.component';
import { TravelComponent } from './travel/travel.component';
import { TravelEditComponent } from './travel/travel-edit.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'control',
    component:ManagementComponent,
    canActivate:[AuthGuard],
    data:{ claimName:'management' }
  },
  {
    path:'aircraft',
    component: AircraftComponent,
    canActivate:[AuthGuard],
    data:{ claimName:'canRentAircraft' }
  },
  {
    path:'aircraftEdit/:cod',
    component: AircraftEditComponent,
    canActivate:[AuthGuard],
    data:{ claimName:'canCreateAircraft' }
  },
  {
    path:'travel',
    component:TravelComponent,
    canActivate:[AuthGuard],
    data:{ claimName:'canAddPassengers' }
  },
  {
    path:'travelEdit/:cod',
    component:TravelEditComponent,
    canActivate:[AuthGuard],
    data:{claimName:'canAddPassengers'}
  }, 
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'dashboard', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
