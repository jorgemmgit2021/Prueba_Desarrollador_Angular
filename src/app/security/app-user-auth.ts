import { Roletemplate } from "./roletemplate";

export class AppUserAuth {
  userName: string = "";
  bearerToken: string = "";
  isAuthenticated: boolean = false;
  profile:string="";
  settings:Roletemplate=new Roletemplate();
}
