import { STATUS } from "../consts";

interface IServer {
  name: string;
  time: number;
  isAvailable(): boolean;
  finishServing(): void;
  serveAsync(): Promise<void>
}

class Server implements IServer {
  name: string;
  time: number;
  private status: STATUS;

  constructor(name: string, time: number) {
    this.name = name;
    this.time = time;
    this.status = STATUS.READY;
  }

  isAvailable() {
    return this.status === STATUS.READY;
  };

  finishServing() {
    this.status = STATUS.READY;
  };

  serveAsync() {
    this.status = STATUS.SERVING;
    return new Promise<void>((resolve) => {  
        setTimeout(()=>{
          this.status = STATUS.READY;
          resolve();
        }, this.time);
      }
    );
  };
}

export default Server;
