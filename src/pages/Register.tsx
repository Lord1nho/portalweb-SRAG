import { useState } from 'react';
import styles from './Register.module.css';
import { Link, Navigate} from 'react-router-dom';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';
import { ClipLoader } from 'react-spinners'; //bibliotecazinha pra carregamento

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
    return (
      <div className={styles.registerPage}>
        <section className={styles.registerContainer}>
          <ClipLoader color={'#1da584'} loading={true} size={50} />
        </section>
      </div>
    );
  }

  if (error) {
    //repetição da tela. Pode ser melhorada se componentizar
    return (
      <div className={styles.registerPage} >
        <section className={styles.registerContainer}>
            <h1>Portal SRAG Brasil</h1>
            <h2>Área de Registro</h2>
            <input type='text' name='email' placeholder='E-mail' onChange={handleInputEmailChange} value={email}></input>
            <input type='password' name='senha' placeholder='Senha' onChange={handleInputPasswordChange} value={password}></input>
            <div className={styles.message_box}>
              <p className={styles.error_message}><strong style={{color: '#f01a1a'}}>Erro:</strong> E-mail inválido.</p>
            </div>
            <input className={styles.button_entrar} type='button' value={'Registrar'} onClick={handleRegister} />
            <Link to="/Login">Já tem cadrasto? Entre</Link>
        </section>
      </div>
    )
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
            <div className={styles.dica_box}>
              <p className={styles.dica_mensagem}>Dica: utilize um e-mail existente.</p>
            </div>
          <input className={styles.button_entrar} type='button' value={'Registrar'} onClick={handleRegister} />
          <Link to="/Login">Já tem cadrasto? Entre</Link>
      </section>
    </div>
  )
}

export default Register