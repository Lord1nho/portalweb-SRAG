import { useState } from 'react';
import {ButtonLogin} from '../request/buttonAuthentication';
import styles from './Login.module.css'
import { Link } from 'react-router-dom';


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
    <div className={styles.loginPage} >
      <section className={styles.loginContainer}>
          <h1>Portal SRAG Brasil</h1>
          <h2>Área de Login</h2>
          <input type='text' name='email' placeholder='E-mail' onChange={handleInputEmailChange} value={email}></input>
          <input type='password' name='senha' placeholder='Senha' onChange={handleInputPasswordChange} value={password}></input>
          <a href=''>Esqueci a senha</a>
          <Link to="/Register">Não tenho cadastro</Link>
          <input type='button' value={'Entrar'} onClick={() => ButtonLogin(email, password)} />
      </section>
    </div>
  );
}

export default Login;
//importante! Buscar formas de componentizar as telas sem repetir