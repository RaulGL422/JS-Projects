window.onload = function() {
    RandomColor();
}

document.querySelector('.but').addEventListener('click', function() {
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
    let num = Math.floor(Math.random() * (name.length));
    document.querySelector('.container').innerHTML = "<h3> Background Color: " + name[num] + "</h3>"
    document.querySelector('body').style.backgroundColor = value[num];
}

