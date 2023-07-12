'use strict';

for (const checkBox of document.querySelectorAll('.interest__check')) {
    checkBox.addEventListener('change', function () {
        interests.onChange(this);
    });
}

class Interests {
    constructor(options) {
        this.title = options.title;
        this.descr = options.descr;
    }

    start() {
        this.getHandler();

    }

    getHandler() {
        addEventListener('change', this);
    }

    handleEvent(event) {
        const method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
        if (typeof this[method] === "function") {
            this[method](event);
        }
    }

    onChange({ target }) {

        if (target.type !== 'checkbox') {
            return;
        }

        this.updateChildren(target);
        this.updateParents(target);
    }

    updateChildren(el) {
        const { checked } = el;
        this.getChildren(el).forEach(child => {
            child.checked = checked;
            child.indeterminate = false;
        });
    }

    updateParents(parent) {
        let parentCheckbox = this.getParent(parent);
        while (parentCheckbox) {
            const children = this.getChildren(parentCheckbox);
            let checked = [...children].filter(child => child.checked).length;
            parentCheckbox.checked = checked === children.length;
            parentCheckbox.indeterminate = checked && !parentCheckbox.checked;
            parentCheckbox = this.getParent(parentCheckbox);
        }
    }

    getChildren(el) {
        el = el.closest('li');
        el = el && el.querySelector('ul');
        return el && el.querySelectorAll('input[type="checkbox"]') || [];
    }

    getParent(el) {
        el = el.closest('li');
        el = el && el.closest('ul').closest('li');
        return el && el.querySelector('input[type="checkbox"]');
    }
}

const interests = new Interests({
    title: 'Дерево интересов',
    descr: 'Выбрать интересы',
});

interests.start();
