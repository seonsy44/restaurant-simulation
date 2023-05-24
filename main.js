function render() {
  Widget.fragment("fragment")
    .append(Widget.h1("title", { textContent: "Restaurant" }))
    .append(Widget.button("sundaeBtn", { textContent: "순댓국" }))
    .append(Widget.button("haejangBtn", { textContent: "해장국" }))
    .append(Widget.h3("orderH3", { textContent: "주문" }))
    .append(Widget.ul("orderUl"))
    .append(Widget.h3("cookingH3", { textContent: "요리" }))
    .append(Widget.ul("cookingUl"))
    .append(Widget.h3("servingH3", { textContent: "서빙" }))
    .append(Widget.ul("servingUl"));

  document.body.append(Widget.get("fragment").getEl());
}

render();
