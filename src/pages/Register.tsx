import { useState } from 'react';
import {ButtonRegister} from '../request/buttonAuthentication';
import styles from './Register.module.css'
import { Link } from 'react-router-dom';


// Função de Register 


function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleInputEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleInputPasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles.registerPage} >
      <section className={styles.registerContainer}>
          <h1>Portal SRAG Brasil</h1>
          <h2>Área de Registro</h2>
          <input type='text' name='email' placeholder='E-mail' onChange={handleInputEmailChange} value={email}></input>
          <input type='password' name='senha' placeholder='Senha' onChange={handleInputPasswordChange} value={password}></input>
          <a href=''>Esqueci a senha</a>
          <Link to="/Login">Já tem cadrasto? Entre</Link>
          <input type='button' value={'Entrar'} onClick={() => ButtonRegister(email, password)} />
      </section>
    </div>
  );
}

export default Register;
//importante! Buscar formas de componentizar as telas sem repetir