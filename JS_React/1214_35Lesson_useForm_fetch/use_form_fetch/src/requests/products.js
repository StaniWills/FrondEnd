//GET
export const getProducts = callback => {
  fetch('https://dummyjson.com/products')
    .then(resp => resp.json())
    .then(json => callback(json.products))
}

//POST
export const addProduct = (body, callback) => {
  fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(resp => resp.json())
    .then(json => callback(json))
}

// DELETE
// export const deleteProducts = (callback) => {
//   fetch('https://dummyjson.com/products/id:15'),{
//    method: 'DELETE'}
//     .then(resp => resp.json())
//     .then(json => callback(json.products))

// PUT
// export const putProducts = (body, callback) => {
//   fetch('https://dummyjson.com/products/id:15'),{
//   method:'PUT',
//   body: JSON.stringify(body)
//   headers: {
//     'Content-Type': 'application/json'
// }}

//     .then(resp => resp.json())
//     .then(json => callback(json.products))
// }
