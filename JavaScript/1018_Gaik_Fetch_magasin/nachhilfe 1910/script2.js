const root = document.querySelector('#root');

function render(products){
    products.forEach((product) => {
     const card = getProductCard(product)

    root.append(card);
    })
}


function getAllProducts(){
    fetch('https://fakestoreapi.com/products')
    .then(respons => respons.json())
    .then(jsonInfo => render(jsonInfo))
}

getAllProducts()

function getProductCard({title, price, image}){
    const cardContainer = document.createElement('div');
    const cardTitle = document.createElement('p');
    const cardPrice = document.createElement('p');
    const cardImg = document.createElement('img');

    cardTitle.innerText = `Title: ${title}`
    cardPrice.innerText = price;
    cardImg.src = image;
    cardImg.alt = `Pic`
    cardContainer.append(cardImg, cardTitle, cardPrice);

    return cardContainer
}