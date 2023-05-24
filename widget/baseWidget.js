import { addControl, getControl, hasControl } from "./core.js";

export function widget(_createControl) {
  var createControl = function (id, option) {
    if (hasControl(id)) throw new Error(`id: ${id}는 이미 존재`);

    var control = _createControl(id, option);

    control.append = function (childControl) {
      this.getEl().append(childControl.getEl());
      return getControl(id);
    };

    addControl(control.id, control);

    return control;
  };

  return createControl;
}
