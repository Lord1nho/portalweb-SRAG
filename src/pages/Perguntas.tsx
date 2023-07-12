import './App.css';
import QueryCard from '../components/QueryCard';
import {queries} from '../assets/Queries'
import { Link } from 'react-router-dom';


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
          style={{ textDecoration: 'none'}}
        >
          Página Inicial
        </Link>
      </button>
      <button className='buttonLink'
      >
        <Link
          to="/Perguntas"
          style={{ textDecoration: 'none'}}
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