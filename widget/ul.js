import { widget } from "./baseWidget.js";

function _createUl(id, option) {
  var el = document.createElement("ul");

  return {
    id: id,
    getEl: function () {
      return el;
    },
    innerHTML: function (string) {
      el.innerHTML = string;
      return Dict[id];
    },
  };
}

export var createUl = widget(_createUl);
