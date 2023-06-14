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
    },
    3: {
        img: 'img/4.jpg',
        name: 'Pedro Sanchez',
        job: 'Political',
        desc: 'I am Pedro Sanchez. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in dui nulla. Proin et augue tempus, cursus eros ac, scelerisque mauris. Phasellus eget enim eu eros gravida mattis at eu nibh. Vestibulum tempus convallis diam eu ultricies. Nunc ante felis, sodales non pellentesque a, consequat vitae dui.'
    },
    4: {
        img: 'img/5.jpg',
        name: 'Mariano Rajoy',
        job: 'Political',
        desc: 'I am Mariano Rajoy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in dui nulla. Proin et augue tempus, cursus eros ac, scelerisque mauris. Phasellus eget enim eu eros gravida mattis at eu nibh. Vestibulum tempus convallis diam eu ultricies. Nunc ante felis, sodales non pellentesque a, consequat vitae dui.'
    },
}

window.onload = function() {
    PrepareButtons();
    RefreshReview();
}

const PrepareButtons = () => {
    let arrows = document.querySelectorAll('.arrows > svg');
    let ranButton = document.querySelector('.random');

    for (let i = 0; i < arrows.length; i++) {
        var arrowType = arrows[i].classList.value
        arrows[i].addEventListener('click', function() {
            if (arrowType == 'arrowleft') {
                RefreshReview('next');
            } else if (arrowType == 'arrowright') {
                RefreshReview('prev');
            } else {
                console.log('Error: Unknown arrow type')
            }
        })
    }
    ranButton.addEventListener('click', function() {
        RefreshReview();
    });
}

var numReview = -1;

const RefreshReview = (Espec) => {
    if (Espec == 'prev') {

    } else if (Espec == 'next') {

    } else {
        let keys = Object.keys(reviews);
        let newNum = Math.floor(Math.random() * keys.length);
        console.log(newNum)
        if (newNum == numReview) {
            RefreshReview();
        } else {
            numReview = newNum;
        }

        SetReview();
    }
}

const SetReview = () => {
    document.querySelector('.img').src = reviews[numReview].img;
    console.log(document.querySelector('.img'))
}