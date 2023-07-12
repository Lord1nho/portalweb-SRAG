import './App.css';
import QueryCard from '../components/QueryCard';
import {queries} from '../assets/Queries'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Perguntas from './Perguntas';
import PaginaInicial from './PaginaInicial';


function App() {
  return (
    <BrowserRouter>
    <Routes> 
    <Route path = '/' element = {<PaginaInicial/>} />
      <Route path = '/Perguntas' element = {<Perguntas/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
