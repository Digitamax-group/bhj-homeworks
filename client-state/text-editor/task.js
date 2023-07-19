const editor = document.getElementById('editor');
editor.value = localStorage.getItem('textEditor');

editor.addEventListener('input', (event) => {
    localStorage.setItem('textEditor', editor.value);
});

const clear = document.getElementById('clearTextEditor');

clear.addEventListener('click', () => {
    localStorage.removeItem('textEditor');
    editor.value = '';
});
