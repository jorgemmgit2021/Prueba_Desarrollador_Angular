import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Aircraft } from './aircraft';
import { AIRCRAFT_MOCK } from './aircraft-mock';

@Injectable()
export class AircraftService {
  aircraftList:Aircraft[];
  constructor() { this.aircraftList=[];}
  
  getList(): Observable<Aircraft[]> {
    return of<Aircraft[]>(AIRCRAFT_MOCK);
  }
  
  getAircraft(cod: string): Observable<Aircraft> {
    let aircraft: Aircraft;
  
    aircraft = AIRCRAFT_MOCK
      .find(Aircraft => Aircraft.Codigo_registro === cod)
  
    return of<Aircraft>(aircraft);
  }  
  saveItem(aircraft:Aircraft){
    var aSearch = AIRCRAFT_MOCK.find(a=>a.Codigo_registro==aircraft.Codigo_registro);
    var aAssign ={ Codigo_registro: aircraft.Codigo_registro,Descripcion: aircraft.Descripcion, Piloto :aircraft.Piloto };
    if(aSearch==undefined)AIRCRAFT_MOCK.unshift(aAssign);
    else(Object.assign(aSearch,aircraft));
  }
}
