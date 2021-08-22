"use strict";

let count = 0;
let factor = 5; // Число попыток за одно нажатие
const btnRandom = document.querySelector('.random');
const btnReset = document.querySelector('.reset');
const btnFactor = document.querySelectorAll('.factor');

function random (go) {
    let     countY = 0,
            countN = 0;
    const   box = document.getElementById('result'),
            boxCount = document.querySelector('.count');

    const randonFunc = () => {return Math.floor(Math.random() * 2) + 1};

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

    boxCount.innerHTML = `Всего попыток: ${count}`;
}

btnRandom.addEventListener('click', () => random(factor));

btnFactor.forEach((el) => {
    el.addEventListener('click', () => factor = el.dataset.factor);
});

btnReset.addEventListener('click', () => {
    const   box = document.getElementById('result'),
            boxCount = document.querySelector('.count');

    while (box.hasChildNodes()) {
        box.removeChild(box.firstChild);
    }

    boxCount.innerHTML = '';
    count = 0; // Сброс счетчика
});