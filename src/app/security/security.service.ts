import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AppUserAuth } from './app-user-auth';
import { AppUser } from './app-user';
import { LOGIN_MOCKS } from './login-mocks';
import { Roletemplate } from './roletemplate';
import { TEMPLATE_MOCK } from './template-mocks';
// import { jwt } from '../../../node_modules/jwt-encode/';

@Injectable()
export class SecurityService {
  securityObject: AppUserAuth = new AppUserAuth();
  
  constructor() { }

  login(entity: AppUser): Observable<AppUserAuth> {
    // Initialize security object
    this.resetSecurityObject();
    //
    // Use object assign to update the current object
    // NOTE: Don't create a new AppUserAuth object
    //       because that destroys all references to object
    Object.assign(this.securityObject,
      LOGIN_MOCKS.find(user => user.userName.toLowerCase() === entity.userName.toLowerCase()));
        if (this.securityObject.userName !== ""){
          // JWT client validation
          // validateAccess(entity);
          // not completed
          // Store into local storage
          localStorage.setItem("bearerToken",
          this.securityObject.bearerToken);
          this.loadSecurities();
    }
  
    return of<AppUserAuth>(this.securityObject);
  }
  
  logout(): void {
    this.resetSecurityObject();
  }
  
  resetSecurityObject(): void {
    this.securityObject.userName = "";
    this.securityObject.bearerToken = "";
    this.securityObject.isAuthenticated = false;
  
    this.securityObject.settings.canAddPassengers = false;
    this.securityObject.settings.canCreateAircraft = false;
    this.securityObject.settings.canRentAircraft = false;
    this.securityObject.settings.management = false;

    localStorage.removeItem("bearerToken");
  }  

  loadSecurities():void{
    let template:Roletemplate = TEMPLATE_MOCK.find(t=>t.role==this.securityObject.profile); 
    this.securityObject.settings = template||new Roletemplate();
  }

  // validateAccess(entity: AppUser):boolean{
  //   const sign = require('jwt-encode');
  //   const secret = 'secret';
  //   const data = {
  //     sub: entity.password,
  //     name: entity.userName,
  //     iat: 1516239022
  //   };
  //   const jwt = sign(data, secret);
  //   return(jwt===this.securityObject.bearerToken);
  // }
}
