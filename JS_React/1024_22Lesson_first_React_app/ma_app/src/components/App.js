import User from "./User";
import { users } from '../data/users'
import Product from "./Product";
import { products } from "../data/products";

export default function App() {

  return (

    <div>
      {/* <User firstname='Oleg' lastname='Petrov'age='50'/>
      <User firstname='Irina' lastname='Sedowa'age='19'/>
      <User firstname='Stas' lastname='Wills'age='25'/> */}

      {/* __________________________________________________________ */}

      {/* {
        users.map(el => <User firstname={el.firstname} 
          lastname={el.lastname} age={el.age} />)
      } */}

      <h2>Users:</h2>

      {
        users.map(el => <User {...el} key={el.id} />)              //sprey Operator
      }

      <h2>Products:</h2>

      {         //obesatelno figurnie skobki
      products.map(el => <Product {...el} key={el.id} />) 
      }


    </div>
  );
}


// https://github.com/NelliEfr/HW_React_basics/blob/main/task.txt