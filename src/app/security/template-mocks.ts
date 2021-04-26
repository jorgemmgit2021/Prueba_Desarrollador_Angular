import { Roletemplate } from "./roletemplate";

export const TEMPLATE_MOCK: Roletemplate[] =[
    {
        canAddPassengers:true, 
        canCreateAircraft:true, 
        canRentAircraft:true, 
        management:true,
        role:'Manager'
    },
    {
        canAddPassengers:true, 
        canCreateAircraft:true, 
        canRentAircraft:true, 
        management:false,
        role:'Pilot'
    },
    {
        canAddPassengers:false, 
        canCreateAircraft:false, 
        canRentAircraft:true, 
        management:false,
        role:'Passenger'
    }
]
