import './App.css';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { DateField } from '../components/DateField';
import { ButtonConsultar } from '../components/ButtonConsultar';
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
        <h1>
          Portal SRAG Brasil
        </h1>
        <h2>Versão 1.0 do Portal da Síndrome Respiratória Aguda</h2>
      </header>
      <section style={{width:200, height: 150, marginLeft: 50,marginTop: 50}} className='ConsultaQst1'>
        <div className='AppContentSearch1'>
            <p> 1 - Pessoas que possuem contatos com animais estão mais propensas a ter SRAG?</p>
            <DateField id='Data-inicio-C1' name='periodo-inicio' />
            <DateField id='Data-fim-c1' name='periodo-fim' />
          <ButtonConsultar/>
        </div>
        <div className='AppContentBody1'>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill="#1da584" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
      <section style={{width:200, height: 150, marginLeft: 50,marginTop: 50}} className='ConsultaQst2'>
        <div className='AppContentSearch2' >
            <p> 2 - Pessoas não vacinadas contra a covid possuem mais chances de ter outros tipos de SRAG tirando a covid?</p>
            <DateField id='Data-inicio-C2' name='periodo-inicio' />
            <DateField id='Data-fim-c2' name='periodo-fim' />
            <ButtonConsultar/>
        </div>
        <div className='AppContentBody2'>
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
