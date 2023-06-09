window.onload = function() {
    RandomColor();
}

let but = document.querySelector('.but');

but.addEventListener('click',function(e) {
    RandomColor();
});

let color = {
    blue: 'rgb(0, 0, 255)',
    red: 'rgb(255, 0, 0)',
    green: 'rgb(0, 255, 0)',
    white: 'rgb(255, 255, 255)',
    yellow: 'rgb(223, 255, 0)',
    orange: 'rgb(255, 191, 0)'
}


const RandomColor = () => {
    let name = Object.keys(color);
    let value = Object.values(color);
    let body = document.querySelector('body');
    let num = Math.floor(Math.random() * (name.length + 1));
    console.log(body.style.backgroundColor)
    while (body.attributes.backgroundColor == value[num]) {
        num = Math.floor(Math.random() * (name.length + 1));
    }
    body.style.backgroundColor = value[num];
}