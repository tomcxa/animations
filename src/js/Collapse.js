export default class Collapse {
    constructor(el) {
        this.el = el;
    }

    init() {
        this.addListener();
    }

    clickHandler() {
        const wrapEl = this.el.querySelector('[data-id="wrapper"]');
        wrapEl.classList.toggle('close');
    }

    addListener() {
        const btnEl = this.el.querySelector('button');
        btnEl.addEventListener('click', this.clickHandler.bind(this));
    }
}
