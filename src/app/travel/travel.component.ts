import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUserAuth } from '../security/app-user-auth';

import { SecurityService } from '../security/security.service';
import { TravelService } from './travel.service';
import { Travel } from './travel';
import { TRAVEL_MOCK } from './travel-mock';

@Component({
  selector: 'ptc-travel',
  templateUrl: './travel.component.html'
})
export class TravelComponent implements OnInit {

  securityObject: AppUserAuth = null;
  travelList:Travel[] = null;
  
  constructor(private TravelService: TravelService,
    private router: Router,
    private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
  }
  
  ngOnInit() {
    this.getTravelList();
  }
  
  private getTravelList(): void {
    this.TravelService.getTravelList()
      .subscribe(Travels => this.travelList = Travels);
      console.log(this.travelList);
  }
  
  addTravel(): void {
    this.router.navigate(['/travelEdit', '-1']);
  }
}
