import { Chef, ChefList, Server, ServerList } from "./objects/index.js";
import { renderOrder, renderCooking, renderCooked, renderServing, removeOrder } from "./utils.js";

var chefs = new ChefList([new Chef("요리사1"), new Chef("요리사2")]);
var servers = new ServerList([new Server("직원1", 1500), new Server("직원2", 3000)]);

export function run(order) {
  renderOrder(order);

  chefs
    .findChefAsync()
    .then(function (chef) {
      renderCooking(order.id, chef);
      return chef.cookAsync(order);
    })
    .then(function () {
      renderCooked(order.id);
      return servers.findServerAsync();
    })
    .then(function (server) {
      renderServing(order.id, server);
      return server.serveAsync();
    })
    .then(function () {
      removeOrder(order);
    });
}
