import { widget } from "./baseWidget.js";

function _createSpan(id, option) {
  var el = document.createElement("span");
  el.textContent = option.textContent;

  return {
    id: id,
    getEl: function () {
      return el;
    },
    updateContent: function (content) {
      el.textContent = content;
    },
  };
}

export var createSpan = widget(_createSpan);
