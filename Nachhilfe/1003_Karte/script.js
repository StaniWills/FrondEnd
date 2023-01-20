const form = document.querySelector('.form');
const container = document.querySelector('.cards_container');


const carInfo = []



form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {name, price, pic} = event.target
    //const name1  = event.target.name

    carInfo.push({
        nameCar: name.value,
        priceCar: price.value,
        picCar: pic.value
    })
    name.value = '';
    price.value = '';
    pic.value = '';
    console.log(carInfo);

    render();
})

function render () {
    carInfo.forEach((car) => {
        const cardContainer = document.createElement('div')
        const carName = document.createElement('p');
        const carImg = document.createElement('img');
        const carPrice = document.createElement('p');

        carName.innerText = car.nameCar
        carPrice.innerText = car.priceCar
        carImg.src = car.picCar
       
        cardContainer.append(carName, carImg, carPrice);
        container.append(cardContainer);
    })
}




