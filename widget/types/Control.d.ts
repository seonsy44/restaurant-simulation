export interface BaseControl {
    id: string;
    _append(childControl: Control): void;
    _remove(): void;
    appendToDOM(parentEl: HTMLElement | DocumentFragment): void;
    [key: string]: any
}

export interface Control extends BaseControl {
    append(childControl: Control): Control;
    remove(id: string): void;
}