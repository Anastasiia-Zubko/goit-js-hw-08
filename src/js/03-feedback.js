import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const getForm = document.querySelector('form');
const email = getForm.elements.email;
const message = getForm.elements.message;
getForm.addEventListener('input', throttle(onFormInput, 500));
getForm.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  const formData = {
    mail: email.value,
    message: message.value,
  };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function getData (){
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!data) return;
  email.value = data.mail;
  message.value = data.message;
}
getData();
function onFormSubmit(e) {
  e.preventDefault();
  if (!email.value || !message.value) {
    return alert('All the fields must be filled in');
  }
  console.log({ email: email.value, message: message.value });
  getForm.reset();
  localStorage.removeItem(STORAGE_KEY);
}


