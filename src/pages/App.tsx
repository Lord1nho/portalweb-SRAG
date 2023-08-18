import './App.css';
import {BrowserRouter, Route, Routes, redirect} from 'react-router-dom';
import Perguntas from './Perguntas';
import PaginaInicial from './PaginaInicial';
import Login from './Login';
import Register from './Register';

// Função para verificar se o token é válido
const isTokenValid = () => {
  const token = localStorage.getItem('token'); // Altere para a forma como você está armazenando o token
  // Aqui você pode adicionar lógica para verificar a validade do token, por exemplo, verificar a expiração.
  return token !== null && token !== undefined;
};

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path = '' element = {<PaginaInicial/>} />
        <Route path = '/Login' element = {<Login/>} />
        <Route path = '/Register' element = {<Register/>} />
        {/* <Route path = '/LostPassword' element = {<LostPassword/>} /> */}
        <Route path = '/Perguntas' element = {<Perguntas/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
