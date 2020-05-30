"use strict";
function addition(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        console.error('showResult is disabled');
    }
    return result;
}
const number1 = 5;
const number2 = 2.8;
const displayResult = true;
const resultPhrase = 'Result is: ';
addition(number1, number2, displayResult, resultPhrase);
//# sourceMappingURL=basics.js.map