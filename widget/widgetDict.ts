import { Control } from "./baseControl";

interface IWidgetDict {
  hasControl(id: string): boolean;
  getControl(id: string): Control<HTMLElement>;
  delControl(id: string): void;
  addControl(id: string, control: Control<HTMLElement>): void;
}

class WidgetDictionary implements IWidgetDict {
  private controls: Record<string, Control<HTMLElement>>;

  constructor() {
    this.controls = {};
  }

  hasControl(id: string) {
    return this.controls.hasOwnProperty(id);
  }

  getControl(id: string) {
    return this.controls[id];
  }

  delControl(id: string) {
    delete this.controls[id];
  }

  addControl(id: string, control: Control<HTMLElement>) {
    if (this.hasControl(id)) throw new Error(`id: ${id}는 이미 존재`);
    this.controls[id] = control;
  }
}

export const WidgetDict = new WidgetDictionary();