import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { AircraftService } from './aircraft.service';
import { Aircraft } from './aircraft';
import { AppUserAuth } from '../security/app-user-auth';
import { SecurityService } from '../security/security.service';

@Component({
  selector: 'ptc-aircraft-edit',
  templateUrl: './aircraft-edit.component.html'
})
export class AircraftEditComponent implements OnInit {

  aircraft:Aircraft;
  securityObject:AppUserAuth=null;

  constructor(private aircraftService:AircraftService, private route: ActivatedRoute,
    private location: Location,
    private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
  }

  ngOnInit() {    
    let cod = this.route.snapshot.paramMap.get('cod');
  // Create or load a Aircraft
    this.createOrLoadAircraft(cod);
  }

  private initAircraft(): void {
    // Create a new Aircraft
    this.aircraft = new Aircraft({
      Codigo_registro:'',
      Descripcion:'',
      Piloto:''
    });
  }

  private createOrLoadAircraft(cod:string) {
    if (cod == "-1") {
      // Create new Aircraft object
      this.initAircraft();
    }
    else {
      // Get a Aircraft from Aircraft service
      this.aircraftService.getAircraft(cod)
        .subscribe(Aircraft => this.aircraft = Aircraft);
    }
  }

  saveData(): void {
    this.aircraftService.saveItem(this.aircraft);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

  cancel(): void {
    this.goBack();
  }
}
