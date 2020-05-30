type Combinable = number | string;
type ConversionableDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionableDescriptor
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  )
    result = +input1 + +input2;
  else result = input1.toString() + input2.toString();

  return result;
}

const combinedAges = combine(31, 25, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine(31, 25, 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Arpit', 'Ram', 'as-text');
console.log(combinedNames);
