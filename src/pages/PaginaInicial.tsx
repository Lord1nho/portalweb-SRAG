import './App.css';
import { Link } from 'react-router-dom';
import { GREEN_FOR_ITENS } from '../assets/colors';
import NavBar from '../components/NavBar';
import Demo from '../services/coords';



function PaginaInicial() {

  return (
    <div className="App" >
      <NavBar/>
      <p>Esta é a página Inicial do Portal da Síndrome Respiratória Aguda (Versão1.0)</p>
      <Demo/>
    </div>
  );
}

export default PaginaInicial;
//importante! Buscar formas de componentizar as telas sem repetir