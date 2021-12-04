const formEl = document.querySelector('.login-form');
const inputEl = document.querySelectorAll('input');

formEl.addEventListener('submit', onSendForm);

function onSendForm(event) {
  event.preventDefault();
  
  if (event.currentTarget.value === '') {
    alert('All fields must be filled!');
  }
  const {
    elements: { email, password }
  } = event.currentTarget;
  console.log('Email:', email.value, 'Password:', password.value);
  formEl.reset();
};


