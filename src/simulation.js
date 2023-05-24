import { Chef, ChefList, Server, ServerList } from "./objects/index.js";
import { renderOrder, renderCooking, renderCooked, renderServing, removeOrder } from "./utils.js";

var chefs = new ChefList([new Chef("요리사1"), new Chef("요리사2")]);
var servers = new ServerList([new Server("직원1", 1500), new Server("직원2", 3000)]);

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
