import { addControl, delControl, getControl, hasControl } from "./core.js";

function chaining(id, _func) {
  var func = function () {
    _func(arguments);

    return getControl(id);
  };

  return func;
}

export function widget(_createControl) {
  var createControl = function (id, option) {
    if (hasControl(id)) throw new Error(`id: ${id}는 이미 존재`);

    var control = _createControl(id, option);

    control.append = function (childControl) {
      this._append(childControl);

      return getControl(id);
    };

    control.remove = function (id) {
      this._remove();
      delControl(id);
    };

    addControl(control.id, control);

    return control;
  };

  return createControl;
}
