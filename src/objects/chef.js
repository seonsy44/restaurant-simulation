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

Chef.prototype.cookAsync = function (menu, onCompleted) {
  this.status = COOKING;
  return new Promise(
    function (resolve) {
      setTimeout(
        function () {
          this.status = READY;
          onCompleted();
          resolve();
        }.bind(this),
        menu.time
      );
    }.bind(this)
  );
};

export default Chef;
