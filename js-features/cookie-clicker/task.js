'use strict'

const element = document.getElementById("cookie");
const click = document.getElementById("clicker");
let time = new Date();
function changeSizes() {
    let last = new Date()
    let difference = last - time;
    let speed = (1 / difference) * 1000;
    click.textContent = speed.toFixed(2);
    const output = document.getElementById("clicker__counter");
    output.textContent++ + 1;
    if (element.width == 150) {
        element.width = 200;
    } else if (element.width == 200) {
        element.width = 150;
    }
    return  time = new Date();
};
element.onclick = changeSizes;
