const loader = document.querySelector('#loader');
const items = document.querySelector('#items');
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

fetch(url)
    .then(response => response.json())
    .then(data => {
        loader.classList.remove('loader_active');
        const valutes = data.response.Valute;
        for (let valute in valutes) {
            const item = document.createElement('div');
            item.classList.add('item');
            const itemCode = document.createElement('div');
            itemCode.classList.add('item__code');
            const itemValue = document.createElement('div');
            itemValue.classList.add('item__value');
            itemCode.textContent = valutes[valute].CharCode;
            itemValue.textContent = valutes[valute].Value;
            item.appendChild(itemCode);
            item.appendChild(itemValue);
            items.appendChild(item);
        }
    })
    .catch(error => console.error(error));
