import { AppUserAuth } from "./app-user-auth";
import { Roletemplate } from "./roletemplate";

export const LOGIN_MOCKS: AppUserAuth[] = [
  {
    userName: "PSheriff",
    bearerToken: "abi393kdkd9393ikd",
    isAuthenticated: true,
    profile:"Manager",
    settings: new Roletemplate()
  },
  {
    userName: "BJones",
    bearerToken: "sd9f923k3kdmcjkhd",
    isAuthenticated: true,
    profile:"Pilot",
    settings: new Roletemplate()
  },
  {
    userName: "Usuario",
    bearerToken: "sd9f923k3kdmcjkhd",
    isAuthenticated: true,
    profile:"Passenger",
    settings: new Roletemplate()
  },
  {
    userName: "Administrador",
    bearerToken: "sd9f923k3kdmcjkhd",
    isAuthenticated: true,
    profile:"Manager",
    settings: new Roletemplate()
  }
];
