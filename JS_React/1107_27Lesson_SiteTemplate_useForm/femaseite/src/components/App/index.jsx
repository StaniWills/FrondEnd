import '../../style.css'
import AboutUs from '../AboutUs';
import Contacts from '../Contacts';
import Footer from '../Footer';
import Nav from '../Nav';
import Services from '../Services';
import { useState } from 'react'

function App() {

  const [ menuActive, setMenuActive ] = useState(false);

  return (
    <div>
      <Nav menuActive={menuActive} setMenuActive={setMenuActive} />
      <Services />
      <AboutUs />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;


// https://www.figma.com/file/02M0v01LH41ocUvQrrj3O0/grid?node-id=1%3A2