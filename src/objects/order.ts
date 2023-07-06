interface IOrder {
  id: string;
  name: string;
  time: number;
}

class Order implements IOrder {
  id: string;
  name: string;
  time: number;

  constructor(id: string, name:string, time: number) {
    this.id = id;
    this.name = name;
    this.time = time;
  }
}

export default Order;
