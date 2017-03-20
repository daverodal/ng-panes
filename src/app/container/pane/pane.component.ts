import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Xfer} from "../xfer";

@Component({
  selector: 'ngp-pane',
  templateUrl: './pane.component.html',
  styles: []
})
export class PaneComponent implements Xfer {

  @Input() conReq : Xfer;
  @Output() conReqChange:  EventEmitter<Xfer>;
  @Input() taskForce: string = '';
  myUnits : any[] = [];
  connection:Xfer;

  keepUnit(){
    // this.myUnits.push(this.units.pop());
  }

  // shipUnit(index){
  //   this.units.push(this.myUnits[index]);
  //   this.myUnits.splice(index,1);
  // }
  constructor() {
    this.conReqChange = new EventEmitter<Xfer>();
  }

  acceptConnection(){
    if(this.conReq){
      this.connect(this.conReq);
      this.conReq.connect(this);
      this.conReqChange.emit(null);
    }else{
      if(this.connection){
        this.connection.disconnect();
        this.disconnect();
      }
    }
  }

  push(index: any){
    let unit = this.myUnits.splice(index,1);
    this.connection.xfer(unit)
  }
  connect(foreign : Xfer){
    this.connection = foreign;
  }
  xfer(value:any){
    this.myUnits.push(value);
  }
  disconnect(){
    this.connection = null;
  }
  connected(){
    return this.connection !== null;
  }

}
