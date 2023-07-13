
input = document.querySelector('#task__input');
button = document.querySelector('#tasks__add');
tasksList = document.querySelector('#tasks__list');


function taskCreator(e) {
    e.preventDefault();
    if (!input.value.trim()) {
        return;
    }
    tasksList.insertAdjacentHTML("beforeEnd", `<div class="task">
    <div class="task__title">`
        + input.value +
        `</div>
    <a href="#" class="task__remove">&times;</a>
    </div> `);

    document.body.addEventListener('click', removeTask);

    input.value = "";

}


function removeTask(e) {
    const target = e.target.closest('.task');
    if (!target) return;
    target.remove();
}


button.addEventListener('click', taskCreator);
