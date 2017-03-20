export interface Xfer {
  disconnect():void;
  connection : Xfer;
  connect(foreign: Xfer);
  push(value);
  xfer(value);
}
