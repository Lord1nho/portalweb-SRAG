import { useState } from 'react';
import styles from './Login.module.css';
import { Link, Navigate} from 'react-router-dom';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';

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
    dispatch(login('example@email.com'));
  }

  if (loading) {
    return <p>carregando...</p>
  }
  if (user) {
    return <Navigate to="/" />
  }
  return (
    <div className={styles.loginPage} >
      <section className={styles.loginContainer}>
          <h1>Portal SRAG Brasil</h1>
          <h2>Área de Login</h2>
          <input type='text' name='email' placeholder='E-mail' onChange={handleInputEmailChange} value={email}></input>
          <input type='password' name='senha' placeholder='Senha' onChange={handleInputPasswordChange} value={password}></input>
          <a href=''>Esqueci a senha</a>
          <Link to="/Register">Não tenho cadastro</Link>
          <input type='button' value={'Entrar'} onClick={handleLogin} />
      </section>
    </div>
  )
}

export default Login