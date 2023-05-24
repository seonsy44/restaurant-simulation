function ChefList(list) {
  this.chefs = list;
}

ChefList.prototype.findChefAsync = function findChef() {
  return new Promise(
    function (resolve) {
      setInterval(_findChef(this.chefs, resolve), 100);
    }.bind(this)
  );
};

function _findChef(chefs, resolve) {
  return function () {
    chefs.forEach(function (chef) {
      if (chef.isAvailable()) return resolve(chef);
    });
  };
}

export default ChefList;
