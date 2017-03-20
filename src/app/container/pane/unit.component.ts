import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngp-unit',
  templateUrl: './unit.component.html',
  styles: []
})
export class UnitComponent  {

  @Input() unit;
  constructor() { }


}
