import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Unit } from "./pane/unit";
import { Xfer } from "./xfer";
import * as _ from "lodash";

@Component({
  selector: 'ngp-container',
  templateUrl: './container.component.html',
  styles: []
})
export class ContainerComponent  implements Xfer  {

  baseUnits : any[] = [];
  @Input() conReq : Xfer = null;
  @Output() conReqChange = EventEmitter;

  connection : Xfer = null;

  constructor() {
    this.baseUnits.push(new Unit('CV-1', 'cv', 8, 6, 3, 3));
    this.baseUnits.push(new Unit('CV-2', 'cv', 8, 6, 3, 3));
    this.baseUnits.push(new Unit('CV-3', 'cv', 8, 6, 3, 3));
    this.baseUnits.push(new Unit('CV-4', 'cv', 8, 6, 3, 3));
    this.baseUnits.push(new Unit('BB-1', 'bb', 44, 10, 27, 24));
    this.baseUnits.push(new Unit('BB-2', 'bb', 44, 10, 27, 24));
    this.baseUnits.push(new Unit('BB-3', 'bb', 44, 10, 27, 24));
  }

  startConnection(){
    if(this.conReq){
      this.conReq = null;
    }else{
      this.conReq = this
    }
  }

  unitClicked(index){
    debugger;
    this.connection.xfer(this.baseUnits[index]);
    this.baseUnits.splice(index,1);
  }
  iGotClicked(){
  }

  push(index: any){
    let unit = this.baseUnits.splice(index,1);
    this.connection.xfer(unit)
  }
  connect(foreign : Xfer){
    this.connection = foreign;
  }
  xfer(value:any){
    this.baseUnits.push(value);
  }
  disconnect(){
    this.connection = null;
  }
}
