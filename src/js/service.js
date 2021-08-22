"use strict";

let nowYear = () => {
    let date = new Date();
    let span = document.querySelector('footer .year');

    span.innerHTML = date.getFullYear();
};

nowYear();