import { useState } from 'react';
import styles from './Login.module.css';
import { Link, Navigate} from 'react-router-dom';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';
import { ClipLoader } from 'react-spinners'; //bibliotecazinha pra carregamento

// Função de login 

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInUserWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth)

  const handleInputEmailChange = (event: any) => {
    setEmail(event.target.value)
  }
  const handleInputPasswordChange = (event: any) => {
    setPassword(event.target.value)
  }
  const handleLogin = () => {
    signInUserWithEmailAndPassword(email, password)
    dispatch(login(email));
  }

  if (error) {
    //repetição da tela. Pode ser melhorada se componentizar
    return (
      <div className={styles.loginPage} >
        <section className={styles.loginContainer}>
            <h1>Portal SRAG Brasil</h1>
            <h2>Área de Login</h2>
            <input type='text' name='email' placeholder='E-mail' onChange={handleInputEmailChange} value={email}></input>
            <input type='password' name='senha' placeholder='Senha' onChange={handleInputPasswordChange} value={password}></input>
            <div className={styles.message_box}>
                <p className={styles.error_message}> <strong style={{color: '#f01a1a'}}>Erro:</strong> E-mail ou senha incorretos.</p>
              </div>
            <input className = {styles.button_entrar}type='button' value={'Entrar'} onClick={handleLogin} />
            <a href=''>Esqueci a senha</a>
            <Link to="/Register">Não tenho cadastro</Link>
        </section>
      </div>
    )
  }

  if (loading) {
    return (
      <div className={styles.loginPage}>
        <section className={styles.loginContainer}>
          <ClipLoader color={'#1da584'} loading={true} size={50} />
        </section>
      </div>
    );
  }
  if (user) {
    return <Navigate to="/PaginaInicial" />
  }
  return (
    <div className={styles.loginPage} >
      <section className={styles.loginContainer}>
          <h1>Portal SRAG Brasil</h1>
          <h2>Área de Login</h2>
          <input type='text' name='email' placeholder='E-mail' onChange={handleInputEmailChange} value={email}></input>
          <input type='password' name='senha' placeholder='Senha' onChange={handleInputPasswordChange} value={password}></input>
          <div className={styles.dica_box}>
              <p className={styles.dica_mensagem}>Dica: Utilize seu e-mail cadastrado no site.</p>
            </div>
          <input className = {styles.button_entrar}type='button' value={'Entrar'} onClick={handleLogin} />
          <a href=''>Esqueci a senha</a>
          <Link to="/Register">Não tenho cadastro</Link>
      </section>
    </div>
  )
}

export default Login