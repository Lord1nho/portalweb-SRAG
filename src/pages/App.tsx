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
      <section style={{display:'flex',flexDirection:'row',width:200, height: 150, marginLeft: 50,marginTop: 50}} className='ConsultaQst1'>
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
        <div className='AppContentSearch3' >
            <p>3 - Pessoas vacinadas contra a covid possuem mais chances de ter outros tipos de SRAG tirando a covid?</p>
            <DateField id='Data-inicio-C3' name='periodo-inicio' />
            <DateField id='Data-fim-c3' name='periodo-fim' />
            <ButtonConsultar/>
        </div>
        <div className='AppContentBody3'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill="#1da584" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='AppContentSearch4' >
            <p>4-Pessoas com idade superior a 50 anos têm mais probabilidade de chegar ao caso de óbito ao contrair SRAG's?</p>
            <DateField id='Data-inicio-C4' name='periodo-inicio' />
            <DateField id='Data-fim-c4' name='periodo-fim' />
            <ButtonConsultar/>
        </div>
        <div className='AppContentBody4'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill="#1da584" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='AppContentSearch5' >
            <p>5-Pessoas com idade inferior a 10 anos têm mais probabilidade de se recuperar ao contrair SRAG's?</p>
            <DateField id='Data-inicio-C5' name='periodo-inicio' />
            <DateField id='Data-fim-c5' name='periodo-fim' />
            <ButtonConsultar/>
        </div>
        <div className='AppContentBody5'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill="#1da584" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        </section>
        <section style={{display:'flex',flexDirection:'row',width:200, height: 150, marginLeft: 50,marginTop: 150}} className='ConsultaQst1'>
        <div className='AppContentSearch6'>
            <p>6-Entre jovens com 20 anos ou menos e adultos com mais de 20 anos, qual grupo possui maior taxa de internamento em UTI?</p>
            <DateField id='Data-inicio-C6' name='periodo-inicio' />
            <DateField id='Data-fim-c6' name='periodo-fim' />
          <ButtonConsultar/>
        </div>
        <div className='AppContentBody6'>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill="#1da584" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='AppContentSearch7' >
            <p>7-Pessoas que na sua internação em UTI que tiveram o uso de suporte respiratório invasivo, possuem taxa de recuperação menor que aqueles que tiveram um uso não invasivo?</p>
            <DateField id='Data-inicio-C7' name='periodo-inicio' />
            <DateField id='Data-fim-c7' name='periodo-fim' />
            <ButtonConsultar/>
        </div>
        <div className='AppContentBody7'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill="#1da584" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='AppContentSearch8' >
            <p>8-Pessoas que tiveram SRAG por covid-19 foram as que mais tiveram que utilizar um suporte respiratório invasivo?
</p>
            <DateField id='Data-inicio-C8' name='periodo-inicio' />
            <DateField id='Data-fim-c8' name='periodo-fim' />
            <ButtonConsultar/>
        </div>
        <div className='AppContentBody9'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill="#1da584" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='AppContentSearch9' >
            <p>9-Qual a porcentagem/quantidade de pessoas que tiveram SRAG em ambiente hospitalar?</p>
            <DateField id='Data-inicio-C9' name='periodo-inicio' />
            <DateField id='Data-fim-c9' name='periodo-fim' />
            <ButtonConsultar/>
        </div>
        <div className='AppContentBody9'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill="#1da584" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='AppContentSearch10' >
            <p>10-Pessoas com diabetes estão mais propensas a serem internadas em UTI ao contrair SRAG?</p>
            <DateField id='Data-inicio-C10' name='periodo-inicio' />
            <DateField id='Data-fim-c10' name='periodo-fim' />
            <ButtonConsultar/>
        </div>
        <div className='AppContentBody10'>
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
