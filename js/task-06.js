const inputEl = document.querySelector('#validation-input');
console.dir(inputEl)
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    
    const inputLength = event.currentTarget.value.length;
    if (inputLength === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}