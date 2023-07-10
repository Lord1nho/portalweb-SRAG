import './App.css';
import QueryCard from '../components/QueryCard';
import {queries} from '../assets/Queries'


function App() {
  return (
    <div className="App" style={{backgroundColor: '#1da584'}}>
      <header className="App">
        <h1>
          Portal SRAG Brasil
        </h1>
        <h2>Versão 1.0 do Portal da Síndrome Respiratória Aguda</h2>
      </header>
      <section className='ChartsContainer'>
        {queries.map(query => {
          return (
            <QueryCard name={query.name} key={query.name} number={query.number} valueDescription1={query.valueDescription1} valueDescription2={query.valueDescription2}/>
          )
        })}
      </section>
      <footer>
        <p>Grupo 18</p>
      </footer>
    </div>
  );
}

export default App;
