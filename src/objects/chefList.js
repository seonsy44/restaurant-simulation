function ChefList(list) {
  this.chefs = list;
}

function _findChef(chefs, resolve) {
  chefs.forEach(function (chef) {
    if (chef.isAvailable()) {
      return resolve(chef);
    }
  });
}

ChefList.prototype.findChefAsync = function findChef() {
  return new Promise(
    function (resolve) {
      setInterval(
        function () {
          _findChef(this.chefs, resolve);
        }.bind(this),
        500
      );
    }.bind(this)
  );
};

export default ChefList;
