import './App.css';
import { useState } from 'react';
import {ButtonLogin} from '../request/buttonAuthentication';


// Função de login 


function Login() {

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
      <header className='App'>
        <h1>
          Portal SRAG Brasil
        </h1>
        
      </header>
      <section id='containerLogin'>
        <form className='login' action='Perguntas' method='GET'>
          <h2>Área de Login</h2>
          <input type='text' name='email' placeholder='E-mail' onChange={handleInputEmailChange} value={email}></input>
          <input type='password' name='senha' placeholder='Senha' onChange={handleInputPasswordChange} value={password}></input>
          <a href=''>Esqueci a senha</a>
          <a href=''>Não tenho cadastro</a>
          <input type='button' value={'Entrar'} onClick={() => ButtonLogin(email, password)} />
       </form>
      </section>
    </div>
  );
}

export default Login;
//importante! Buscar formas de componentizar as telas sem repetir