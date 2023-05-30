import { widget } from "./baseWidget.js";

function _createFragment(id, option) {
  var el = document.createDocumentFragment();

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

export var createFragment = widget(_createFragment);
