"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Arpit';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const reult = generateError('An error occured!', 500);
//# sourceMappingURL=unknown-never-types.js.map