// https://fakestoreapi.com/products

const root = document.querySelector('.root');

function renderCards(arrayCards){
    arrayCards.forEach(card => {
        const productCard = getProductCard(card)
        root.append(productCard)
    })
}

function getAllProducts(){
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(info => renderCards(info))
}

getAllProducts()

function getProductCard(card_info) {
    const {title, price, description, image} = card_info
    const card_Container = document.createElement('div');
    const img_elem = document.createElement('img');
    const header_elem = document.createElement('p');
    const price_elem = document.createElement('p');
    const description_elem = document.createElement('p');

    card_Container.classList.add(`card`);
    img_elem.classList.add(`img`);
    header_elem.classList.add(`title`);

img_elem.src = image;
img_elem.alt = 'Photo';
header_elem.innerText = `Title: ${title}`;
price_elem.innerText = `Price: ${price} $`;
description_elem.innerText = description;

card_Container.append(img_elem, header_elem, description_elem, price_elem);
return(card_Container)
}
























