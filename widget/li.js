import { widget } from "./baseWidget.js";

function _createLi(id, option) {
  var el = document.createElement("li");

  return {
    id: id,
    getEl: function () {
      return el;
    },
  };
}

export var createLi = widget(_createLi);
