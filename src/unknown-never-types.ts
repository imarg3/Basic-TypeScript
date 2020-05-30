// unknown and never types
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Arpit';

if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

const reult = generateError('An error occured!', 500);
