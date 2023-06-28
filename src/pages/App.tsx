import './App.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <p>
          Portal Web - Dados sobre a SRAG - SINDROME RESPIRATÓRIA AGUDA
        </p>
      </header>
      <section className='AppContent'>
        <div className='AppContentSearch'>
          <select name="" id="">
            <option value="CONSULTA1">CONSULTA1</option>
            <option value="CONSULTA2">CONSULTA2</option>
            <option value="CONSULTA3">CONSULTA3</option>
          </select>
          <input type="date" name="" id="" />
          <input type="date" name="" id="" />
          <button className='AppContentSearchButton'>Consultar</button>
        </div>
        <div className='AppContentBody'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill="#1da584" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}

export default App;
