let buttons = document.querySelectorAll('.buttons > button');
let counter = document.querySelector('.counter');
var count = 0;

window.onload = function() {
    for (var i = 0; i < buttons.length; i++) {
        let buttonName = buttons[i].classList.value;
        buttons[i].addEventListener('click', function(e) {
            if (buttonName == 'increase') {
                counter.textContent = parseInt(counter.textContent) + 1
            } else if (buttonName == 'decrease') {
                counter.textContent = parseInt(counter.textContent) - 1
            } else {
                counter.textContent = 0
            }
        })
    };
}