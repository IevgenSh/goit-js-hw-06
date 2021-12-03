const inputEl = document.querySelector('#name-input');
let outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputchange)

function onInputchange(event) {

   outputEl.textContent = event.currentTarget.value || 'Anonymous';
}



