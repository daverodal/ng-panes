export interface Xfer {
  connection: Xfer;
  connect(foreign: Xfer);
  push(value);
  xfer(value);
  disconnect(): void;
}
