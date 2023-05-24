import { widget } from "./baseWidget.js";

function _createH1(id, option) {
  var el = document.createElement("h1");
  el.textContent = option.textContent;

  return {
    id: id,
    getEl: function () {
      return el;
    },
  };
}

export var createH1 = widget(_createH1);
