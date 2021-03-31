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
                        const data = JSON.parse(request.responseText);
                        resolve(data);

                        data.cars.forEach(item => {
                            if (item.brand === select.value) {
                                const { brand, model, price } = item;

                                output.innerHTML = `
                  brand: ${brand}, model: ${model} <br>
                  price: ${price}
                  `;
                            };
                        });
                    } else {
                        reject(request.statusText);
                    };
                });
                request.send();
            });
        }
        getData('cars.json');
    });
});