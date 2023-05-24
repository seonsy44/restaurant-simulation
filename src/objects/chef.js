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
      setTimeout(_cook(onCompleted, resolve).bind(this), order.time);
    }.bind(this)
  );
};

function _cook(onCompleted, resolve) {
  return function () {
    this.status = READY;
    onCompleted();
    resolve();
  };
}

export default Chef;
