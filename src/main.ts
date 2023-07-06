import { handleOrderBtnClick } from "./utils";
import type { Control } from "./types/Control";

declare var window: {
  Widget: {
    [key: string]: (id: string, option?: Partial<HTMLElement>) => Control<HTMLElement>;
    get: (id: string) => Control<HTMLElement>;
  };
};
const { Widget } = window;

function render() {
  Widget.fragment("fragment")
    .append(Widget.h1("title", { textContent: "Restaurant" }))
    .append(
      Widget.button("sundaeBtn", {
        textContent: "순댓국",
        onclick: handleOrderBtnClick("순댓국", 2000),
      })
    )
    .append(
      Widget.button("haejangBtn", {
        textContent: "해장국",
        onclick: handleOrderBtnClick("해장국", 3000),
      })
    )
    .append(Widget.h3("orderH3", { textContent: "주문" }))
    .append(Widget.ul("orderUl"))
    .append(Widget.h3("cookingH3", { textContent: "요리중" }))
    .append(Widget.ul("cookingUl"))
    .append(Widget.h3("cookedH3", { textContent: "요리완료" }))
    .append(Widget.ul("cookedUl"))
    .append(Widget.h3("servingH3", { textContent: "서빙중" }))
    .append(Widget.ul("servingUl"));

  Widget.get("fragment").appended(document.body);
}

render();
