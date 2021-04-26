export class Aircraft {
    public constructor(init?: Partial<Aircraft>) {
        Object.assign(this, init);
      }
    
    Codigo_registro:string='';
	Descripcion:string='';
	Piloto:string='';
}
