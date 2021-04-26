import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { SecurityService } from './security/security.service';

@Directive({
  selector: '[ptcDisplaycontrol]'
})
export class DisplaycontrolDirective {

  constructor(private _Element:ElementRef, private _Render:Renderer2, private _Secure:SecurityService ){
    this._Render.setProperty(this._Element, 'disabled', `${this._Secure.securityObject.settings.management}`);
  }

}
