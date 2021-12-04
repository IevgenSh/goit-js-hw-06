const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSendForm);

function onSendForm(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === '' || password === ''){
    alert('All fields must be filled')
  }
  else { const formData = {
    email,
    password};
                          
    console.log(formData);
  }
  formEl.reset();
};


