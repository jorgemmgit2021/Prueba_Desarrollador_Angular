export class Roletemplate {
    public constructor(init?: Partial<Roletemplate>) {
        Object.assign(this, init);
    }    
    canAddPassengers:boolean=false;
    canCreateAircraft:boolean=false;
    canRentAircraft:boolean=false;
    management:boolean=false;
    role:string='';
}
