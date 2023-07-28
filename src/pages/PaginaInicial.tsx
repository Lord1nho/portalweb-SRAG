import './App.css';
import QueryCard from '../components/QueryCard';
import {queries} from '../assets/Queries'
import { Link } from 'react-router-dom';
import { GREEN_FOR_ITENS } from '../assets/colors';
import { useState } from 'react';
import {ButtonLogin} from '../request/buttonAuthentication';


function PaginaInicial() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleInputEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleInputPasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

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
        <form className='login' action='Perguntas' method='GET'>
          <h2>Área de Login</h2>
          <input type='text' name='email' placeholder='E-mail' onChange={handleInputEmailChange} value={email}></input>
          <input type='password' name='senha' placeholder='Senha' onChange={handleInputPasswordChange} value={password}></input>
          <a href=''>Esqueci a senha</a>
          <a href=''>Não tenho cadastro</a>
          <input type='button' onClick={() => ButtonLogin(email, password)} />
       </form>
      </section>
    </div>
  );
}

export default PaginaInicial;
//importante! Buscar formas de componentizar as telas sem repetir