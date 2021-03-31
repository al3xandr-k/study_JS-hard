document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars');
    const output = document.getElementById('output');

    select.addEventListener('change', () => {
        const getData = (url) => {
            return new Promise((resolve, reject) => {

                const request = new XMLHttpRequest();

                request.open('GET', url);
                request.setRequestHeader('Content-type', 'application/json');

                request.addEventListener('readystatechange', () => {
                    if (request.readyState === 4 && request.status === 200) {
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
            data.cars.forEach(item => {
                if (item.brand === select.value) {
                    const { brand, model, price } = item;

                    output.insertAdjacentHTML('beforebegin', `
                    brand: ${brand}, model: ${model} <br>
                    price: ${price}`
                    );
                };
            });
        };

        const carsData = getData('cars.json');

        Promise.race(carsData)
            .then(outputCars)
            .catch(error => console.error(error));
    });
});