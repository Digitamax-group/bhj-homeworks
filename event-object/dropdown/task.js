const dropdown = document.querySelector('.dropdown__value'),
      dropdownItem = Array.from(document.querySelectorAll('.dropdown__link'));

      dropdown.addEventListener('click', function() {
        if (this.nextElementSibling.classList.contains('dropdown__list_active')) {
            this.nextElementSibling.classList.remove('dropdown__list_active');
        } else {
            this.nextElementSibling.classList.add('dropdown__list_active');
        }
    });

      for (item of dropdownItem) {
        item.addEventListener('click', function(event){
            event.preventDefault();
            dropdown.textContent = this.textContent;
            this.closest('ul').classList.remove('dropdown__list_active');
        })
      }
