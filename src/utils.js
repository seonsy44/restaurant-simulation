import { Menu } from "./objects/index.js";
import { run } from "./simulation.js";

export function renderOrder(menu) {
  var orderId = crypto.randomUUID();

  Widget.get("orderUl").append(
    Widget.li(`${orderId}`).append(
      Widget.span(`${menu.name}-${orderId}`, { textContent: menu.name })
    )
  );

  return orderId;
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

export function removeOrder(orderId, menu) {
  Widget.get(orderId).remove(orderId);
  Widget.get(`${menu.name}-${orderId}`).remove(orderId);
  Widget.get(`info-${orderId}`).remove(orderId);
}

export function handleOrderBtnClick(menu, second) {
  return function () {
    run(new Menu(menu, second));
  };
}
