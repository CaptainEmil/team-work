const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    cnt = 0;

    while (localStorage.getItem(`user${cnt++}`) !== null) { };

    localStorage.setItem(`user${cnt}`, JSON.stringify({username: usernameInput.value, password: passwordInput.value}));

    location.href = 'http://192.168.0.155:63576/pages/weather/weather.html';
});