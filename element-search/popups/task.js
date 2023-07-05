'use strict';

let modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');


let modalCloses = Array.from(document.querySelectorAll('div.modal__close'));
modalCloses.forEach((item) => {
    item.onclick = () => {
        item.closest('.modal').classList.remove('modal_active');
    };
});

let modalSuccess = document.getElementById('modal_success')
let showSuccess = modalMain.querySelector('.show-success');
showSuccess.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};
