import { widget } from "./baseWidget.js";

function _createSpan(id, option) {
  var el = document.createElement("span");
  el.textContent = option.textContent;

  return {
    id: id,
    getEl: function () {
      return el;
    },
  };
}

export var createSpan = widget(_createSpan);
