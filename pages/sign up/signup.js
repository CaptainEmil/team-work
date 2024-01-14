const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const usernameError = document.querySelector('#username-error');
const passwordError = document.querySelector('#password-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    cnt = 0;
    isInvalid = false;

    if (usernameInput.value === '') {
        usernameError.style.display = 'inline';
        isInvalid = true;
    }
    else {
        usernameError.style.display = 'none';
    }
    if (passwordInput.value === '') {
        passwordError.style.display = 'inline';
        isInvalid = true;
    }
    else {
        passwordError.style.display = 'none';
    }

    if (isInvalid) return;

    usernameError.style.display = 'none';
    passwordError.style.display = 'none';

    while (localStorage.getItem(`user${cnt++}`) !== null) { };

    localStorage.setItem(`user${cnt}`, JSON.stringify({username: usernameInput.value, password: passwordInput.value}));

    location.href = 'http://192.168.0.155:63576/pages/weather/weather.html';
});