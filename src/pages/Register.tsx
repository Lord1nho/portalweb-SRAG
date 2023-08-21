import { useState } from 'react';
import styles from './Register.module.css';
import { Link, Navigate} from 'react-router-dom';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';

// Função de Register 

function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [createUserWithEmailAndPassword, user, loading, error] =
  useCreateUserWithEmailAndPassword(auth)

  const handleInputEmailChange = (event: any) => {
    setEmail(event.target.value)
  }

  const handleInputPasswordChange = (event: any) => {
    setPassword(event.target.value)
  }

  const handleRegister = () => {
    createUserWithEmailAndPassword(email, password)
  }

  if (loading) {
    return <p>carregando...</p>
  }
  if (user) {
    return <Navigate to="/Login" />
  }
  return (
    <div className={styles.registerPage} >
      <section className={styles.registerContainer}>
          <h1>Portal SRAG Brasil</h1>
          <h2>Área de Registro</h2>
          <input type='text' name='email' placeholder='E-mail' onChange={handleInputEmailChange} value={email}></input>
          <input type='password' name='senha' placeholder='Senha' onChange={handleInputPasswordChange} value={password}></input>
          <a href=''>Esqueci a senha</a>
          <Link to="/Login">Já tem cadrasto? Entre</Link>
          <input type='button' value={'Entrar'} onClick={handleRegister} />
      </section>
    </div>
  )
}

export default Register