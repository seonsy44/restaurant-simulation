function Menu(name, time) {
  this.name = name;
  this.time = time;
}

function Chef() {
  this.status = "ready"; //cooking
}

Chef.prototype.isAvailable = function () {
  return this.status === "ready";
};
Chef.prototype.cookAsync = function (menu) {
  return new Promise(function (resolve) {
    setTimeout(resolve, menu.time);
  });
};

var orders = [];
var cookings = [];
var servings = [];

var chefs = [new Chef(), new Chef()];

function renderOrders() {
  var ordersEl = document.getElementById("orders");
  ordersEl.innerHTML = "";

  orders.forEach(function (order) {
    var liEl = document.createElement("li");
    liEl.append(order.name);
    document.getElementById("orders").append(liEl);
  });
}

document.getElementById("sundae").onclick = function () {
  run(new Menu("순댓국", 1000));
};

document.getElementById("haejang").onclick = function () {
  run(new Menu("해장국", 2000));
};

// 주문, 요리, 서빙의 메인 프로세스는 이 함수에서 전부 처리되어야 한다.
// 화면이 뻗으면 안됨
function run(menu) {
  // 주문 목록에 추가 출력,
  orders.push(menu);
  renderOrders();

  // 대기중인 요리사 찾기(요리사가 있을 때까지 대기해야 함)
  findChecfAsyn().then(function (chef) {
    // 요리사에게 요리시킴
    // -- 요리 목록으로 넘어가야 함
    chef.cookAsync().then(function () {
      // 서빙을 시킴
      // -- 서빙 목록으로 넘어가야 함
    });
  });
}
