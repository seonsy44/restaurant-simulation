import Chef from "./objects/chef";
import Order from "./objects/order";
import Server from "./objects/server";
import { run } from "./simulation";
import type { Control } from "./types/Control";

declare var window: {
  Widget: {
    [key: string]: (id: string, option?: Partial<HTMLElement>) => Control<HTMLElement>;
    get: (id: string) => Control<HTMLElement>;
  };
};

const { Widget } = window;

export function renderOrder(order: Order) {
  Widget.get("orderUl").append(
    Widget.li(`${order.id}`).append(Widget.span(`${order.name}-${order.id}`, { textContent: order.name }))
  );
}

export function renderCooking(orderId: string, chef: Chef) {
  Widget.get("cookingUl").append(
    Widget.get(orderId).append(Widget.span(`info-${orderId}`, { textContent: `(${chef.name})` }))
  );
}

export function renderCooked(orderId: string) {
  Widget.get("cookedUl").append(Widget.get(orderId));
  Widget.get(`info-${orderId}`).update({ textContent: `(server를 찾는중..)` });
}

export function renderServing(orderId: string, server: Server) {
  Widget.get("servingUl").append(Widget.get(orderId));
  Widget.get(`info-${orderId}`).update({ textContent: `(${server.name})` });
}

export function removeOrder(order: Order) {
  Widget.get(order.id).remove();
  Widget.get(`${order.name}-${order.id}`).remove();
  Widget.get(`info-${order.id}`).remove();
}

export function handleOrderBtnClick(menu: string, second: number) {
  return function () {
    const orderId = crypto.randomUUID();
    run(new Order(orderId, menu, second));
  };
}
