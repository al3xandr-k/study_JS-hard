document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    select.addEventListener('change', () => {
        const getData = (url) => {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.open('GET', url);
                request.setRequestHeader('Content-type', 'application/json');

                request.addEventListener('readystatechange', () => {
                    if (request.readyState === 4) {
                        return;
                    };

                    if (request.status === 200) {
                        const data = JSON.parse(request.responseText);
                        resolve(data);
                    } else {
                        reject(request.statusText);
                    };
                });
                request.send();
            });
        };

        const outputCars = (data) => {
            console.log('data: ', data);
            data.cars.forEach(item => {
                console.log('item: ', item);
                if (item.brand === select.value) {
                    const { brand, model, price } = item;

                    output.insertAdjacentHTML('beforebegin', `Тачка ${brand} ${model} <br>
            Цена: ${price}$`);
                }
            });

            const cars = getData('cars.json');

            Promise.race(cars)
                .then(outputCars)
                .catch(error => console.error(error));
        }
    });
});