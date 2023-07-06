import { STATUS } from "../consts";
import Order from "./order";

interface IChef {
  name: string;
  isAvailable(): boolean;
  finishCooking(): void;
  cookAsync(order: Order): Promise<void>;
}

class Chef implements IChef {
  name: string;
  private _status: STATUS;

  constructor(name: string) {
    this.name = name;
    this._status = STATUS.READY;
  }

  isAvailable () {
    return this._status === STATUS.READY;
  };

  finishCooking () {
    this._status = STATUS.READY;
  };

  cookAsync (order: Order) {
    this._status = STATUS.COOKING;
    return new Promise<void>((resolve) => {
        setTimeout(() => {
          this._status = STATUS.READY;
          resolve();
        }, order.time);
      }
    )
  };
}

export default Chef;