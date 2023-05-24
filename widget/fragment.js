import { widget } from "./baseWidget.js";

function _createFragment(id, option) {
  var el = document.createDocumentFragment();

  return {
    id: id,
    getEl: function () {
      return el;
    },
  };
}

export var createFragment = widget(_createFragment);
