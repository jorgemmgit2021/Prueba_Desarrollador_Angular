import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { TravelService } from './travel.service';
import { Travel } from './travel';
import { AppUserAuth } from '../security/app-user-auth';
import { SecurityService } from '../security/security.service';


@Component({
  selector: 'ptc-travel-edit',
  templateUrl: './travel-edit.component.html'
})
export class TravelEditComponent implements OnInit {

  travel:Travel;
  aeronaves:any[];
  listPasajeros:any[];
  securityObject:AppUserAuth=null;

  constructor(private TravelService:TravelService, private route: ActivatedRoute,
    private location: Location,
    private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
    this.aeronaves = [{Codigo_registro:'SPACESHIP ONE'},{Codigo_registro:'SPACECARRIER 1'},{Codigo_registro:'TRANSBORRDER'},{Codigo_registro:'BOEING'}];
    this.listPasajeros = [{Nombre:'Pasajero 1'},{Nombre:'Pasajero 2'},{Nombre:'Pasajero 3'}];
  }

  ngOnInit() {    
    let cod = this.route.snapshot.paramMap.get('cod');
  // Create or load a Travel
    this.createOrLoadTravel(cod);
  }

  private initTravel(): void {
    // Create a new Travel
    this.travel = new Travel({
      Ubicacion:'',
      Salida:new Date(),
      Llegada:new Date(),
      Aeronave:'',
      Pasajeros:[]
    });
  }

  private createOrLoadTravel(cod:string) {
    if (cod == "-1") {
      // Create new Travel object
      this.initTravel();
    }
    else {
      // Get a Travel from Travel service
      this.TravelService.getTravel(cod)
        .subscribe(Travel => this.travel = Travel);
    }
  }

  public appendPassenger(passenger:any){
    if(this.travel.Pasajeros.find(p=>p.Nombre==passenger.target.value)==undefined)
    this.travel.Pasajeros.unshift({Nombre:passenger.target.value});
  }

  saveData(): void {
    this.TravelService.saveItem(this.travel);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

  cancel(): void {
    this.goBack();
  }
}
