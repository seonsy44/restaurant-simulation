import { widget } from "./baseWidget.js";

function _createH1(id, option) {
  var el = document.createElement("h1");
  el.textContent = option.textContent;

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

export var createH1 = widget(_createH1);
