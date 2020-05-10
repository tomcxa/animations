import Collapse from './Collapse';
import Callback from './Callback';
import Hater from './Hater';

// eslint-disable-next-line no-console
console.log('it works!');
const collapseEl = document.querySelector('[data-id="collapse"]');
const collapse = new Collapse(collapseEl);
collapse.init();

const calbackEl = document.querySelector('[data-id="callback-chat"]');
const calback = new Callback(calbackEl);
calback.init();

const haterEl = document.querySelector('[data-id="hater"]');
const hater = new Hater(haterEl);
hater.init();
