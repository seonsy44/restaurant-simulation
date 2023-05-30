import { widget } from "./baseWidget.js";

function _createSpan(id, option) {
  var el = document.createElement("span");
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
    updateContent: function (content) {
      el.textContent = content;
    },
  };
}

export var createSpan = widget(_createSpan);
