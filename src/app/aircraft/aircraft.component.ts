import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUserAuth } from '../security/app-user-auth';
import { SecurityService } from '../security/security.service';
import { AircraftService } from '../aircraft/aircraft.service';
import { Aircraft } from './aircraft';

@Component({
  selector: 'ptc-aircraft',
  templateUrl: './aircraft.component.html'
})
export class AircraftComponent implements OnInit {
  securityObject: AppUserAuth = null;
  AircraftList:Aircraft[] = null;
  
  constructor(private aircraftService: AircraftService,
    private router: Router,
    private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
  }  
  
  ngOnInit() {
    this.getAircraftList();
  }
  
  private getAircraftList(): void {
    this.aircraftService.getList()
      .subscribe(aircrafts => this.AircraftList = aircrafts);
      console.log(this.AircraftList);
  }
  
  addAircraft(): void {
    this.router.navigate(['/aircraftEdit', '-1']);
  }
}
