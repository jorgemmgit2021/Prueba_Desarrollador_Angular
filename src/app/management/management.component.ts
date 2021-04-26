import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AppUserAuth } from '../security/app-user-auth';
import { Roletemplate } from '../security/roletemplate';
import { SecurityService } from '../security/security.service';
import { ManagementService } from './management.service';

@Component({
  selector: 'ptc-management',
  templateUrl: './management.component.html'
})
export class ManagementComponent implements OnInit {
  securityObject: AppUserAuth = null;
  currentUser: AppUserAuth = null;
  roles:any[];
  users:any[];
  groupUsers:any[];
  template:Roletemplate;
  constructor(private route: ActivatedRoute, private location: Location,private securityService:SecurityService, private managementService:ManagementService){
    this.securityObject = this.securityService.securityObject;
    this.currentUser = new AppUserAuth();
    this.roles = this.managementService.getRoleList();
    this.users = this.managementService.getUserList();
    this.groupUsers = [];
  }

  ngOnInit(){
  }
  public appendUser(user:any){
    if(this.groupUsers.find(e=>e.Nombre==user.target.value)==undefined)
    this.groupUsers.unshift({Nombre:user.target.value});
  }
  public listProfile(rol:any){
    this.groupUsers = this.managementService.getRoleUsers(rol.target.value);
  }
  saveData(): void {
    this.managementService.saveItem(this.currentUser);
    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }

  cancel(): void {
    this.goBack();
  }  
}
