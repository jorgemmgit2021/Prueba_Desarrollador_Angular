import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Roletemplate } from '../security/roletemplate';
import { TEMPLATE_MOCK } from '../security/template-mocks';
import { AppUserAuth } from '../security/app-user-auth';
import { LOGIN_MOCKS } from '../security/login-mocks';
import { TemplateBinding } from '@angular/compiler';

@Injectable()
export class ManagementService {
  roles:any[];
  users:any[];
  groupUsers:any[];
  template:Roletemplate;
  constructor() { 
    this.template = new Roletemplate();
    this.roles = [];
    this.users = [];
    this.groupUsers = [];
  }
  getUserList():any[]{
    LOGIN_MOCKS.forEach(l=>{
      if(this.users.find(u=>u.Nombre==l.userName)==undefined) this.users.push({Nombre:l.userName, profile:l.profile});      
    });
    return this.users;
  }
  getRoleList():any[]{
    TEMPLATE_MOCK.forEach(t=>{ 
      if(this.roles.find(o=>o.Nombre==t.role)==undefined) this.roles.push({Nombre:t.role});
    });
    return this.roles;
  }
  getRoleUsers(rol:string):any[]{
    this.groupUsers=[];
    LOGIN_MOCKS.filter(t=>t.profile==rol).forEach(l=>{ this.groupUsers.push({Nombre:l.userName})});
    return this.groupUsers;
  }
  saveItem(user:AppUserAuth){
    this.groupUsers.forEach(p=>{
      var aSearch = LOGIN_MOCKS.find(a=>a.userName==p.Nombre);
      var aAssign ={ userName: user.userName||p.Nombre, bearerToken: user.bearerToken, 
        isAuthenticated: user.isAuthenticated, profile:user.profile,settings:new Roletemplate({ canAddPassengers:user.settings.canAddPassengers,
        canCreateAircraft:user.settings.canCreateAircraft, canRentAircraft:user.settings.canRentAircraft, management:user.settings.management })
      };
      if(aSearch==undefined)LOGIN_MOCKS.unshift(aAssign);
      else(Object.assign(aSearch,aAssign));
    });
  }
}
