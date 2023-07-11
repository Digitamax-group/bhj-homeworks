const book = [...document.querySelectorAll('.book')];
const resizeButtons = [...document.querySelectorAll('.font-size')];
const colorButtons = [...document.querySelectorAll('.book__control_color > .color')];
const backgroundButtons = [...document.querySelectorAll('.book__control_background > .color')];

for (resizeButton of resizeButtons) {
    resizeButton.addEventListener('click', function (event) {
        event.preventDefault();

        resizeButtons.forEach(button => button.classList.remove('font-size_active'));
        this.classList.add('font-size_active');

        if (this.dataset.size == 'small') {
            book.forEach(item => {
                item.classList.remove('book_fs-big');
                item.classList.add('book_fs-small');
            });
        } else if (this.dataset.size == 'big') {
            book.forEach(item => {
                item.classList.remove('book_fs-small');
                item.classList.add('book_fs-big');
            });
        } else {
            book.forEach(item => {
                item.classList.remove('book_fs-small');
                item.classList.remove('book_fs-big');
            });
        }
    });
};



for (colorButton of colorButtons) {
    colorButton.addEventListener('click', function (event) {
        event.preventDefault();

        colorButtons.forEach(button => button.classList.remove('color_active'));
        this.classList.add('color_active');

        if (this.dataset.color == 'gray') {
            book.forEach(item => {
                item.classList.remove('book_color-whitesmoke')
                item.classList.add('book_color-gray');
            });
        } else if (this.dataset.color == 'whitesmoke') {
            book.forEach(item => {
                item.classList.remove('book_color-gray');
                item.classList.add('book_color-whitesmoke');
            });
        } else {
            book.forEach(item => {
                item.classList.remove('book_color-gray');
                item.classList.remove('book_color-whitesmoke');
            });
        }
    });
};

for (backgroundButton of backgroundButtons) {
    backgroundButton.addEventListener('click', function (event) {
        event.preventDefault();

        backgroundButtons.forEach(button => button.classList.remove('color_active'));
        this.classList.add('color_active');

        if (this.dataset.color == 'black') {
            book.forEach(item => {
                item.classList.remove('book_bg-gray')
                item.classList.add('book_bg-black');
            });
        } else if (this.dataset.color == 'gray') {
            book.forEach(item => {
                item.classList.remove('book_bg-black');
                item.classList.add('book_bg-gray');
            });
        } else {
            book.forEach(item => {
                item.classList.remove('book_bg-gray');
                item.classList.remove('book_bg-black');
            });
        }
    });
};
