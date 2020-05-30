function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
  return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(3, 6));

// let someValue: undefined

// Function Types
let combineValues: (value1: number, value2: number) => number;

combineValues = add;

console.log(combineValues(9, 9));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
