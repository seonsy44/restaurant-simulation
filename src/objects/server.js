import { READY, SERVING } from "../consts.js";

function Server(name, time) {
  this.name = name;
  this.time = time;
  this.status = READY;
}

Server.prototype.isAvailable = function () {
  return this.status === READY;
};

Server.prototype.finishServing = function () {
  this.status = READY;
};

Server.prototype.serveAsync = function () {
  this.status = SERVING;
  return new Promise(
    function (resolve) {
      setTimeout(
        function () {
          this.status = READY;
          resolve();
        }.bind(this),
        this.time
      );
    }.bind(this)
  );
};

export default Server;
