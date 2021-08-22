"use strict";

const nowYear = () => {
    const   date = new Date(),
            dateBlock = document.querySelector('footer .year');

    dateBlock.innerHTML = date.getFullYear();
};

nowYear();