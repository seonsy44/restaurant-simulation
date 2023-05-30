import { widget } from "./baseWidget.js";

function _createButton(id, option) {
  var el = document.createElement("button");
  el.textContent = option.textContent;
  el.type = option.type;
  el.onclick = option.onClick;

  return {
    id: id,
    _append: function (childControl) {
      childControl.appendToParent(el);
    },
    _remove: function () {
      el.remove();
    },
    appendToParent: function (parentEl) {
      parentEl.append(el);
    },
  };
}

export var createButton = widget(_createButton);
