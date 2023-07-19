import './App.css';
import QueryCard from '../components/QueryCard';
import {queries} from '../assets/Queries'
import { Link } from 'react-router-dom';
import { GREEN_FOR_ITENS } from '../assets/colors';


function PaginaInicial() {
  return (
    <div className="App" >
      <header>
        <h1>
          Portal SRAG Brasil
        </h1>
        <div className='buttonContainer'>
        <button className='buttonLink'
      >
        <Link
          to="/"
          style={{color: GREEN_FOR_ITENS ,textDecoration: 'none'}}
        >
          Página Inicial
        </Link>
      </button>
      <button className='buttonLink'
      >
        <Link
          to="/Perguntas"
          style={{color: GREEN_FOR_ITENS ,textDecoration: 'none'}}
        >
          Perguntas
        </Link>
      </button>
      </div>
      </header>
      <p>Esta é a página Inicial do Portal da Síndrome Respiratória Aguda (Versão1.0)</p>
      <section className='containerLogin'>
        <form id='login' action='Perguntas' method='GET'>
        <h2>Área de Login</h2>
          <input type='text' name='usuario' placeholder='E-mail'></input>
          <input type='password' name='senha' placeholder='Senha'></input>
          <input type='submit'/>
       </form>
      </section>
    </div>
  );
}

export default PaginaInicial;
//importante! Buscar formas de componentizar as telas sem repetir