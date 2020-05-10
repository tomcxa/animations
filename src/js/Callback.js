export default class Callback {
    constructor(el) {
        this.el = el;
    }

    init() {
        this.addListener();
    }

    clickHandler(event) {
        event.preventDefault();
        const btnEl = this.el.querySelector('button');
        const formEl = this.el.querySelector('[data-id="callback-form"]');
        if (event.target.classList.contains('btn-close')) {
            formEl.classList.remove('zoom-in');
            formEl.classList.add('zoom-out');
        }
        if (event.target.classList.contains('callback-btn')) {
            btnEl.classList.remove('zoom-in');
            btnEl.classList.add('zoom-out');
        }
    }

    addListener() {
        const formEl = this.el.querySelector('[data-id="callback-form"]');
        const btnEl = this.el.querySelector('button');

        btnEl.addEventListener('animationstart', (e) => {
            if (e.animationName === 'zoomOut') {
                formEl.classList.add('zoom-in');
                formEl.classList.remove('hidden');
            }

            if (e.animationName === 'zoomIn') {
                btnEl.classList.remove('hidden');
            }
        });

        btnEl.addEventListener('animationend', (e) => {
            if (e.animationName === 'zoomOut') {
                btnEl.classList.add('hidden');
            }

            if (e.animationName === 'zoomIn') {
                formEl.classList.add('hidden');
            }
        });

        formEl.addEventListener('animationstart', (e) => {
            if (e.animationName === 'zoomOut') {
                btnEl.classList.remove('hidden');
                btnEl.classList.add('zoom-in');
            }
        });

        formEl.addEventListener('animationend', (e) => {
            if (e.animationName === 'zoomOut') {
                formEl.classList.add('hidden');
            }
        });

        this.el.addEventListener('click', this.clickHandler.bind(this));
    }
}
