import { Order } from "./objects/index.js";
import { run } from "./simulation.js";

export function renderOrder(order) {
  Widget.get("orderUl").append(
    Widget.li(`${order.id}`).append(
      Widget.span(`${order.name}-${order.id}`, { textContent: order.name })
    )
  );
}

export function renderCooking(orderId, chef) {
  Widget.get("cookingUl").append(
    Widget.get(orderId).append(
      Widget.span(`info-${orderId}`, {
        textContent: `(${chef.name})`,
      })
    )
  );
}

export function renderCooked(orderId) {
  Widget.get("cookedUl").append(Widget.get(orderId));
  Widget.get(`info-${orderId}`).updateContent(`(server를 찾는중..)`);
}

export function renderServing(orderId, server) {
  Widget.get("servingUl").append(Widget.get(orderId));
  Widget.get(`info-${orderId}`).updateContent(`(${server.name})`);
}

export function removeOrder(order) {
  Widget.get(order.id).remove(order.id);
  Widget.get(`${order.name}-${order.id}`).remove(order.id);
  Widget.get(`info-${order.id}`).remove(order.id);
}

export function handleOrderBtnClick(menu, second) {
  return function () {
    var orderId = crypto.randomUUID();
    run(new Order(orderId, menu, second));
  };
}
