document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars');
    const output = document.getElementById('output');

    select.addEventListener('change', () => {
        const getData = (data) => {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();

                request.open('GET', data);

                request.setRequestHeader('Content-type', 'application/json');

                request.addEventListener('readystatechange', () => {
                    if (request.readyState === 4 && request.status === 200) {
                        const response = JSON.parse(request.responseText);
                        console.log('response: ', response);
                        resolve(response);
                    } else {
                        reject(request.statusText);
                    };
                });
                request.send();
            });
        };

        const outputData = (data) => {

            data.forEach(item => {
                if (item.brand === select.value) {
                    const { brand, model, price } = item;

                    output.innerHTML = `
                    brand: ${brand}, model: ${model} <br>
                    price: ${price}
                    `;
                };
            });
        }
        const urlJson = 'cars.json';

        const oneCar = getData(urlJson[0]);
        const twoCar = getData(urlJson[1]);

        Promise.all([oneCar, twoCar])
            .then(outputData)
            .catch(error => console.error(error));
    });
});