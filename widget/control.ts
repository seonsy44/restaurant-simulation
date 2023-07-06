import { WidgetDict } from "./widgetDict";

export class Control<THtmlElement> {
  private id: string;
  protected el: HTMLElementTagNameMap[keyof HTMLElementTagNameMap] | DocumentFragment;

  constructor(
    id: string,
    tagName: keyof HTMLElementTagNameMap | "fragment",
    option: Partial<THtmlElement>
  ) {
    if (tagName === "fragment") {
      this.el = document.createDocumentFragment();
      return this;
    }

    this.el = document.createElement(tagName);

    Object.entries(option).forEach(([key, value]) => {
      this.el[key] = value;
    });

    WidgetDict.addControl(id, this);
  }

  append(childControl: Control<HTMLElement>) {
    childControl.appended(this.el);
  }

  appended(parentEl: HTMLElement | DocumentFragment) {
    parentEl.append(this.el);
  }

  remove() {
    if (!(this.el instanceof DocumentFragment)) {
      this.el.remove();
      WidgetDict.delControl(this.id);
    }
  }
}
