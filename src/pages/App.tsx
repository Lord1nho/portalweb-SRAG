import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Perguntas from './Perguntas';
import PaginaInicial from './PaginaInicial';
import Login from './Login';

/*
Se quiserem testar o login, só trocar o primeiro route path pelo login
*/

function App() {
  return (
    <BrowserRouter>
    <Routes> 
    <Route path = '' element = {<PaginaInicial/>} />
    <Route path = '/Login' element = {<Login/>} />
      <Route path = '/Perguntas' element = {<Perguntas/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
