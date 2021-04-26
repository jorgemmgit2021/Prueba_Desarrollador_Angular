export class Travel {
    public constructor(init?: Partial<Travel>) {
        Object.assign(this, init);
      }
      Ubicacion:string='';
      Salida:Date=new Date();
      Llegada:Date=new Date();
      Aeronave:string='';
      Pasajeros:any[]=[]
}
