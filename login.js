// Insert your code here
// JE séléctionne les donner a renvoyer et je fais mon écouter d'event
document.querySelector('#register').addEventListener('click', function () {
  const userName = document.querySelector('#registerName').value;
  const userEmail = document.querySelector('#registerEmail').value;
  const userPassword = document.querySelector('#registerPassword').value;

  fetch('https://weather-backend-mu-five.vercel.app/users/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
      password: userPassword,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.result) {
        window.location.assign('/index.html');
      }
    });
});

document.querySelector('#connection').addEventListener('click', function () {
  const userEmail = document.querySelector('#connectionEmail').value;
  const userPassword = document.querySelector('#connectionPassword').value;

  fetch('https://weather-backend-mu-five.vercel.app/users/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.result) {
        window.location.assign('/index.html');
      }
    });
});
