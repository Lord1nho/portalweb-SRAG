import './App.css';
import { Link, Navigate } from 'react-router-dom';
import { GREEN_FOR_ITENS } from '../assets/colors';
import NavBar from '../components/NavBar';
import Demo from '../components/coords';
import { useSelector } from 'react-redux';



function PaginaInicial() {
  const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated)

  if(!isAuthenticated){
    return <Navigate to="/"/>
  }

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