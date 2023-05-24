import Chef from "./objects/chef.js";
import ChefList from "./objects/chefList.js";
import Server from "./objects/server.js";
import ServerList from "./objects/serverList.js";

var chefs = new ChefList([new Chef("요리사1"), new Chef("요리사2")]);
var servers = new ServerList([new Server("직원1", 1500), new Server("직원2", 3000)]);

function renderOrder(menu) {
  var orderId = crypto.randomUUID();

  Widget.get("orderUl").append(Widget.li(`${orderId}`).append(Widget.span(`${menu.name}-${orderId}`, { textContent: menu.name })));

  return orderId;
}

function renderCooking(orderId, chef) {
  Widget.get("cookingUl").append(
    Widget.get(orderId).append(
      Widget.span(`info-${orderId}`, {
        textContent: `(${chef.name})`,
      })
    )
  );
}

function renderCooked(orderId) {
  Widget.get("cookedUl").append(Widget.get(orderId));
  Widget.get(`info-${orderId}`).updateContent(`(server를 찾는중..)`);
}

function renderServing(orderId, server) {
  Widget.get("servingUl").append(Widget.get(orderId));
  Widget.get(`info-${orderId}`).updateContent(`(${server.name})`);
}

function removeOrder(orderId, menu) {
  Widget.get(orderId).remove(orderId);
  Widget.get(`${menu.name}-${orderId}`).remove(orderId);
  Widget.get(`info-${orderId}`).remove(orderId);
}

export function run(menu) {
  var orderId = renderOrder(menu);

  chefs
    .findChefAsync()
    .then(function (chef) {
      renderCooking(orderId, chef);
      return chef.cookAsync(menu, function () {
        renderCooked(orderId);
      });
    })
    .then(function () {
      return servers.findServerAsync();
    })
    .then(function (server) {
      renderServing(orderId, server);
      return server.serveAsync();
    })
    .then(function () {
      removeOrder(orderId, menu);
    });
}
