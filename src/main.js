import { run } from "./simulation.js";
import Menu from "./objects/menu.js";

function render() {
  Widget.fragment("fragment")
    .append(Widget.h1("title", { textContent: "Restaurant" }))
    .append(
      Widget.button("sundaeBtn", {
        textContent: "순댓국",
        onClick: function () {
          run(new Menu("순댓국", 2000));
        },
      })
    )
    .append(
      Widget.button("haejangBtn", {
        textContent: "해장국",
        onClick: function () {
          run(new Menu("해장국", 3000));
        },
      })
    )
    .append(Widget.h3("orderH3", { textContent: "주문" }))
    .append(Widget.ul("orderUl"))
    .append(Widget.h3("cookingH3", { textContent: "요리중" }))
    .append(Widget.ul("cookingUl"))
    .append(Widget.h3("cookedH3", { textContent: "요리대기" }))
    .append(Widget.ul("cookedUl"))
    .append(Widget.h3("servingH3", { textContent: "서빙중" }))
    .append(Widget.ul("servingUl"));

  document.body.append(Widget.get("fragment").getEl());
}

render();
