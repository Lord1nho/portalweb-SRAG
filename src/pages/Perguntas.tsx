import './App.css';
import QueryCard from '../components/QueryCard';
import {queries} from '../assets/Queries'
import { Link } from 'react-router-dom';
import { GREEN_FOR_ITENS } from '../assets/colors';


function Perguntas() {
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

export default Perguntas;