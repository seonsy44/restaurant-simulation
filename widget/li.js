import { widget } from "./baseWidget.js";

function _createLi(id, option) {
  var el = document.createElement("li");

  return {
    id: id,
    _append: function (childControl) {
      childControl.appendToDOM(el);
    },
    _remove: function () {
      el.remove();
    },
    appendToDOM: function (parentEl) {
      parentEl.append(el);
    },
  };
}

export var createLi = widget(_createLi);
