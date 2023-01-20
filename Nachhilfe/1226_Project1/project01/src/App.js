import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import PostsPage from './pages/PostsPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Layout/>} >
      <Route index element={<MainPage/>} />
      <Route path='/posts' element={<PostsPage/>} />
      <Route path='/users' element={<UsersPage/>} />
    </Route>
  </Routes>
  );
}


export default App;


// Всегда должен быть всего один корневой тег для каждого компонента! (schnur 6)
// При использовании переменных в return любого компонента нужно использовать фигурные скобки {} (schnur 6)
// "./" - путь текущей папки для доступа к файлам