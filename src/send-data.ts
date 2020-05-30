let logged;

function sendData(data: string) {
  console.log(data);
  logged = true;
}

sendData('My data');
