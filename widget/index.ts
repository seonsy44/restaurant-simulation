import { Control } from "./baseControl.js";
import { WidgetDict } from "./widgetDict.js";

declare var window: {
  Widget: {
    [key: string]: (id: string, option: Partial<HTMLElement>) => Control<HTMLElement>;
    get: (id: string) => Control<HTMLElement>;
  };
};

function createControl<TElement>(tagName: keyof HTMLElementTagNameMap) {
  return (id: string, option: Partial<TElement>) => new Control(id, tagName, option);
}

window.Widget = {
  //fragment: createFragment,
  button: createControl<HTMLButtonElement>("button"),
  ul: createControl<HTMLUListElement>("ul"),
  li: createControl<HTMLLIElement>("li"),
  h1: createControl<HTMLHeadingElement>("h1"),
  h3: createControl<HTMLHeadingElement>("h3"),
  span: createControl<HTMLSpanElement>("span"),
  get: (id: string) => WidgetDict.getControl(id),
};
