import './App.css';
import QueryCard from '../components/QueryCard';
import {queries} from '../assets/Queries'
import { Link, Navigate } from 'react-router-dom';
import { GREEN_FOR_ITENS } from '../assets/colors';
import NavBar from '../components/NavBar';
import { useSelector } from 'react-redux';


function Perguntas() {
  const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated);

  if(isAuthenticated === false){
    return <Navigate to="/Login"/>
  }
  return (
    <div className="App" >
      <NavBar/>
      <section className='ChartsContainer'>
        {queries.map(query => {
          return (
            <QueryCard name={query.name} key={query.name} number={query.number} valueDescription1={query.valueDescription1} valueDescription2={query.valueDescription2}/>
          )
        })}
      </section>

    </div>
  );
}

export default Perguntas