const counterValue = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

let counter = 0;

function updateCounter() {
    counterValue.innerText = counter;
}

function incrementCounter() {
    counter += 1;
    updateCounter();
}

function decrementCounter() {
    counter -= 1;
    if(counter<=-1){
      alert("value can not be negative");
    }else{
      updateCounter();
    }
}

function resetCounter() {
    counter = 0;
    updateCounter();
}

incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
resetButton.addEventListener('click', resetCounter);
