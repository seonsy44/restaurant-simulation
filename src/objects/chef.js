import { COOKING, READY } from "../consts.js";

function Chef(name) {
  this.name = name;
  this.status = READY;
}

Chef.prototype.isAvailable = function () {
  return this.status === READY;
};

Chef.prototype.finishCooking = function () {
  this.status = READY;
};

Chef.prototype.cookAsync = function (order, onCompleted) {
  this.status = COOKING;
  return new Promise(
    function (resolve) {
      this.onCompleted = onCompleted;
      this.resolve = resolve;

      setTimeout(_completeCook.bind(this), order.time);
    }.bind(this)
  );
};

function _completeCook() {
  this.status = READY;
  this.onCompleted();
  this.resolve();
}

export default Chef;
