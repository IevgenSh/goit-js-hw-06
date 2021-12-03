const buttonDecr = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');
let counterValue = document.querySelector('#value');

counterValue = 0;

const increment = () => {
    counterValue +=1;
    document.getElementById('value').textContent = counterValue;
    
}

const decrement = () => {
    counterValue -=1;
    document.getElementById('value').textContent = counterValue;
}

buttonDecr.addEventListener('click', (decrement))
buttonIncr.addEventListener('click', (increment))
