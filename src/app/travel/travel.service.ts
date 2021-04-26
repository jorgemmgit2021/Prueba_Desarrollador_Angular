import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Travel } from './travel';
import { TRAVEL_MOCK } from './travel-mock'


@Injectable()
export class TravelService {
  travelList:Travel[];
  constructor() { this.travelList = []; }
  getTravelList(): Observable<Travel[]> {
    return of<Travel[]>(TRAVEL_MOCK);
  }
  
  getTravel(cod: string): Observable<Travel> {
    let travel: Travel;
  
    travel = TRAVEL_MOCK
      .find(Travel => Travel.Aeronave === cod);
    return of<Travel>(travel);
  }  
  saveItem(travel:Travel){
    var aSearch = TRAVEL_MOCK.find(t=>t.Aeronave==travel.Aeronave);
    var aAssign ={ Ubicacion: travel.Ubicacion, Salida:travel.Salida, Llegada:travel.Llegada, 
      Aeronave:travel.Aeronave, Pasajeros:travel.Pasajeros };
    if(aSearch==undefined)TRAVEL_MOCK.unshift(aAssign);
    else(Object.assign(aSearch,travel));
  }
}
