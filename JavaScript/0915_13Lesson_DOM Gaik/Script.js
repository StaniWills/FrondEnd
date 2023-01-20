const data = [
  {
    ID: 1,
    name: 'Stani',
    email: 'stani@web.de',
    avatar: '../media/Bildschirmfoto.png'
  },
  
  {
    ID: 2,
    name: 'Maks',
    email: 'maks@web.de',
    avatar: '../media/Bildschirmfoto.png'
  },
  
  {
    ID: 3,
    name: 'Anton',
    email: 'Anton@web.de',
    avatar: '../media/Bildschirmfoto.png'
  }
];

const root = document.querySelector('#root');

data.forEach(user => {
  const card = document.createElement('div');
  card.classList.add('card');
  root.append(card);
  
  const id = document.createElement('p');
  id.innerText = user.ID;
  // card.append(id);

  const name = document.createElement('p');
  name.innerText = user.name;
  // card.append(name);

  const email = document.createElement('a');
  email.innerText = user.email;
  // card.append(email);
  email.href = `mailto: ${user.email}`; 

  const pic = document.createElement('img');
  pic.src = user.avatar;
  // card.prepend(pic);
  pic.classList.add('pic');

  card.append(pic,id,name,email);






})







































// const root = document.querySelector('#root');

// data.forEach(user => {
//   const card = document.createElement('div');
//   const idNum =document.createElement('p')
//   const name = document.createElement('p');
//   const email = document.createElement('a');  // 2) добавить почту (тег a) в котором внутри будет указана почта 
//                                               // и в качестве атрибута href
//   const img = document.createElement('img');

//   card.classList.add('card');                 // 1) добавить класс card для элемента card
//   img.classList.add('pic');


//   idNum.innerText = user.ID;
//   name.innerText = user.name;
//   img.src = user.avatar;                      // добавить картинку с аватаркой и вставить ее перед именем и email

//   email.innerText = user.email;
//   email.href = 'mailto: ' + user.email;
  

//   card.append(img, idNum, name, email);
//   root.append(card);
// })



