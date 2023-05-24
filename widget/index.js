import { createButton } from "./button.js";
import { delControl, getControl } from "./core.js";
import { createFragment } from "./fragment.js";
import { createH1 } from "./h1.js";
import { createH3 } from "./h3.js";
import { createLi } from "./li.js";
import { createSpan } from "./span.js";
import { createUl } from "./ul.js";

window.Widget = {
  fragment: createFragment,
  button: createButton,
  ul: createUl,
  li: createLi,
  h1: createH1,
  h3: createH3,
  span: createSpan,
  get: getControl,
};
