var value = 0;
var counter = document.getElementById('counter');
var button_increment = document.getElementById('button-increment');
var button_decrement = document.getElementById('button-decrement');
var button_reset = document.getElementById('button-reset');

button_increment.onclick = function() { 
    counter.innerText = ++value; 
};

button_decrement.onclick = function() { 
    counter.innerText = --value; 
};

button_reset.onclick = function() { 
    value = 0; 
    counter.innerText = value; 
};