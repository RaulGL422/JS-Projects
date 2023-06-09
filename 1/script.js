window.onload = function() {
    RandomColor();
}

let but = document.querySelector('.but');

but.addEventListener('click',function(e) {
    RandomColor();
});

let color = {
    blue: '#0000FF',
    red: '#FF0000',
    green: '#00FF00',
    white: '#FFFFFF',
    yellow: '##DFFF00',
    orange: '#FFBF00'
}


const RandomColor = () => {
    let name = Object.keys(color);
    let value = Object.values(color);
    console.log(name+ ', ' + value);
}