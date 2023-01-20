const form = document.querySelector('#add_product_form');


form.addEventListener('submit', event => {
  event.preventDefault();

  // console.log(event.target.password.value);

  const {title, id} = event.target;
  console.log(title.value, id.value);
})

function getCard (title,id){
  const container = document.createElement('div');
  const title_p = document.createElement('div');
  const id_p = document.createElement('div');
  title_p.innerText = title;
  id_p.innerText = id;
  container.append(title,id);
  return container

}