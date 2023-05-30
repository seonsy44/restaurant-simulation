import { widget } from "./baseWidget.js";

function _createUl(id, option) {
  var el = document.createElement("ul");

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
    innerHTML: function (string) {
      el.innerHTML = string;
      return Dict[id];
    },
  };
}

export var createUl = widget(_createUl);
