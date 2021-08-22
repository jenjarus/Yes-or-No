"use strict";

let count = 0;
let factor = 5;
let btnRandom = document.querySelector('.random');
let btnReset = document.querySelector('.reset');
let btnFactor = document.querySelectorAll('.factor');

btnRandom.addEventListener('click', () => random(factor));

for (let el of btnFactor) {
    el.addEventListener('click', () => factor = el.dataset.factor);
}

btnReset.addEventListener('click', () => {
    let box = document.getElementById('result');
    let box_count = document.querySelector('.count');

    while (box.hasChildNodes()) {
        box.removeChild(box.firstChild);
    }

    box_count.innerHTML = '';
    count = 0; //Сброс счетчика
});


function random (go) {
    let countY = 0,
        countN = 0,
        box = document.getElementById('result'),
        box_count = document.querySelector('.count');
    let randonFunc = () => {return Math.floor(Math.random() * (2 - 1 + 1)) + 1};

    for (let i = 0; i < go; i++) {
        count++;

        switch (randonFunc()) {
            case 1:
                box.insertAdjacentHTML('afterbegin', `<div class="item">Да</div>`);
                countY++;
                break;
            case 2:
                box.insertAdjacentHTML('afterbegin', `<div class="item">Нет</div>`);
                countN++;
                break;
            default:
                console.log('Упс');
                break;
        }
    }

    if (go > 1) {
        box.insertAdjacentHTML('afterbegin', `<div class="item">Ответ - <b>${(countY < countN) ? 'Нет' : 'Да'}</b></div>`);
    }

    box_count.innerHTML = `Всего попыток: ${count}`;
}