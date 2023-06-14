let reviews = {
    0: {
        img: 'img/1.jpg',
        name: 'Nicolas De Gomar',
        job: 'Web Developer',
        desc: 'I am Nicolas de Gomar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in dui nulla. Proin et augue tempus, cursus eros ac, scelerisque mauris. Phasellus eget enim eu eros gravida mattis at eu nibh. Vestibulum tempus convallis diam eu ultricies. Nunc ante felis, sodales non pellentesque a, consequat vitae dui.'
    },
    1: {
        img: 'img/2.jpg',
        name: 'Ivan Lopez',
        job: '.net Developer',
        desc: 'I am Ivan Lopez. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in dui nulla. Proin et augue tempus, cursus eros ac, scelerisque mauris. Phasellus eget enim eu eros gravida mattis at eu nibh. Vestibulum tempus convallis diam eu ultricies. Nunc ante felis, sodales non pellentesque a, consequat vitae dui.'
    },
    2: {
        img: 'img/3.jpg',
        name: 'Santiago Ruiz',
        job: 'Boomer',
        desc: 'I am Santiago Ruiz. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in dui nulla. Proin et augue tempus, cursus eros ac, scelerisque mauris. Phasellus eget enim eu eros gravida mattis at eu nibh. Vestibulum tempus convallis diam eu ultricies. Nunc ante felis, sodales non pellentesque a, consequat vitae dui.'
    }
}

window.onload = function() {
    PrepareButtons();
    RefreshReview();
}

const PrepareButtons = () => {
    let arrows = document.querySelectorAll('.arrows > svg');
    let ranButton = document.querySelector('.random');

    for (let i = 0; i < arrows.length; i++) {
        arrows[i].addEventListener('click', function() {
            RefreshReview(arrows[i].classList.value);
        })
    }

    ranButton.addEventListener('click', function() {
        RefreshReview();
    });
}

var numReview = -1;

const RefreshReview = (Espec) => {
    let keys = Object.keys(reviews);
    if (Espec == 'prev') {
        if (numReview == 0) {
            console.log(numReview = keys.length)
            numReview = keys.length - 1;
        } else {
            numReview = numReview - 1;
        }
    } else if (Espec == 'next') {
        if (numReview == keys.length) {
            numReview = 0;
        } else {
            numReview = numReview + 1;
        }
    } else {
        let keys = Object.keys(reviews);
        let newNum = Math.floor(Math.random() * keys.length);
        if (newNum == numReview) {
            RefreshReview();
        } else {
            numReview = newNum;
        }
    }
    SetReview();
}

const SetReview = () => {
    document.querySelector('.img').src = reviews[numReview].img;
    document.querySelector('.name').textContent = reviews[numReview].name;
    document.querySelector('.job').textContent = reviews[numReview].job;
    document.querySelector('.desc').textContent = reviews[numReview].desc;
}