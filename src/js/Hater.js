/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
export default class Hater {
    constructor(el) {
        this.el = el;
    }

    init() {
        this.addListener();
    }

    clickHandler(event) {
        event.preventDefault();
        const hateEl = document.createElement('div');
        hateEl.classList.add('hate');
        this.setAnimation(hateEl);
        this.el.append(hateEl);
        hateEl.addEventListener('animationend', (e) => {
            e.currentTarget.remove();
        });
    }

    setAnimation(target) {
        const animations = ['positionOne', 'positionTwo', 'positionThree', 'positionFour'];
        const randIdx = Math.floor(Math.random() * animations.length);
        target.style.animationName = animations[randIdx];
    }

    addListener() {
        const btnEl = this.el.querySelector('.hater-btn');
        btnEl.addEventListener('click', this.clickHandler.bind(this));
    }
}
