let cars = [
    {
        ID: 1,
        model: 'Mersedes',
        color: 'silver',
        cost: 100000,
        country: 'Germany',
        foto: './pics/mers.webp',
        email: 'mers@gmx.de'
    },
    {   ID: 2,
        model: 'Audi',
        color: 'gold',
        cost: 105000,
        country: 'Germany',
        foto: './pics/audi.jpeg',
        email: 'audi@gmx.de'
    },
    {
        ID: 3,
        model: 'BMW',
        color: 'white',
        cost: 150000,
        country: 'Germany',
        foto: './pics/bmw.jpeg',
        email: 'bmw@gmx.de'
    }
]

let catalog = document.querySelector('.root');

cars.forEach(car => {
    let card = document.createElement('div');
    card.classList.add('card');

    let id = document.createElement('span');
    let model = document.createElement('p');
    let color = document.createElement('p');
    let cost = document.createElement('p');
    let country = document.createElement('p');
    let foto = document.createElement('img');
    let email = document.createElement('a');

    foto.src = car.foto;
    foto.classList.add('fotoklein');

    model.innerText = car.model;
    color.innerText = `Color: ${car.color}`;
    cost.innerText = `Cost: $ ${car.cost}`;
    country.innerText = `Country: ${car.country}`;
    email.innerText = `Contakts: ${car.email}`;

    email.href = `mailto : ${car.email}`;

    catalog.append(card);
    card.append(foto, model, color, cost, country, email);


});





















