import { getUsers } from '../../requests/users'
import { useState, useEffect } from 'react'
import { Context } from '../../context'
import { Routes, Route } from 'react-router-dom'
import MainPage from '../../pages/MainPage';
import ProductsPage from '../../pages/ProductsPage';
import UsersPage from '../../pages/UsersPage';
import { getProducts } from '../../requests/products'

function App() {

  const [ users, setUsers ] = useState([]);
  const [ products, setProducts] = useState([]);

  useEffect(() => {
    getUsers(setUsers)
    getProducts(setProducts)
  }, []); // функция вызывается один раз при перезагрузке страницы

  // getUsers(setUsers) - функция вызывается много раз

  return (
    <div>
      <Context.Provider value={{ users, products }}>
        <Routes>
          <Route path='/' element={ <MainPage /> } />
          <Route path='/products' element={ <ProductsPage /> } />
          <Route path='/users' element={ <UsersPage /> } />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;