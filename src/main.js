import { handleOrderBtnClick } from "./utils.js";

function render() {
  Widget.fragment("fragment")
    .append(Widget.h1("title", { textContent: "Restaurant" }))
    .append(
      Widget.button("sundaeBtn", {
        textContent: "순댓국",
        onClick: handleOrderBtnClick("순댓국", 2000),
      })
    )
    .append(
      Widget.button("haejangBtn", {
        textContent: "해장국",
        onClick: handleOrderBtnClick("해장국", 3000),
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

  Widget.get("fragment").appendToDOM(document.body);
}

render();
