var throttle = require('lodash.throttle');

const FORM_STATE = 'feedback-form-state';
const input = document.querySelector('input');
const message = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');

let data = JSON.parse(localStorage.getItem(FORM_STATE)) || {};
input.value = data.email || '';
message.value = data.message || '';

input.addEventListener('input', throttle(checkInput), 500);
message.addEventListener('input', throttle(checkMessage), 500);
form.addEventListener('submit', saveUserData);

function checkInput(event) {
  data[event.target.name] = event.target.value;
  localStorage.setItem(FORM_STATE, JSON.stringify(data));
}

function checkMessage(event) {
  data[event.target.name] = event.target.value;
  localStorage.setItem(FORM_STATE, JSON.stringify(data));
}

function saveUserData(event) {
  event.preventDefault();
  console.log(data);
  data = {};
  localStorage.setItem(FORM_STATE, JSON.stringify(data));
  form.reset();
}
