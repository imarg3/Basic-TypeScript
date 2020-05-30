"use strict";
const button = document.querySelector('button');
function addNumbers(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return 0;
}
const clickHandler = (message) => {
    console.log('Clicked! ' + message);
};
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'Welcome to TypeScript World !'));
}
//# sourceMappingURL=app.js.map