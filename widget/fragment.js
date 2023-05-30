import { widget } from "./baseWidget.js";

function _createFragment(id, option) {
  var el = document.createDocumentFragment();

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

export var createFragment = widget(_createFragment);
