const button = document.querySelector('button')!;

// This function must return due to Code Quality options in tsconfig
function addNumbers(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }

  return 0;
}

const clickHandler = (message: string) => {
  // let username = 'Arpit';
  console.log('Clicked! ' + message);
};

// a comment
if (button) {
  button.addEventListener(
    'click',
    clickHandler.bind(null, 'Welcome to TypeScript World !')
  );
}
