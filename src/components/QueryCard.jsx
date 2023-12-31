import {useState} from 'react'
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import { DateField } from './DateField';
import styles from './QueryCard.module.css'
import RegionField from './RegionField';
import { BLACK_DEFAULT, GREEN_FOR_ITENS } from '../assets/colors';
import ButtonData from '../services/buttonDataFetch';

const COLORS = ['#0088FE', '#00C49F'];

export default function QueryCard({name, number, valueDescription1, valueDescription2}) {

    const [data, setData] = useState(null);


    return (
        <div className={styles.QueryCardContainer}>
            <div className='QuerySearch'>
                <p className={styles.queryText}> 
                    {name}
                </p>
                <div className={styles.QuerySearchOptions}>
                    <DateField id='Data-inicio-C1' name='periodo-inicio' />
                    <DateField id='Data-fim-c1' name='periodo-fim' />
                    <RegionField/>
                    <button className={styles.queryButton} onClick={() => ButtonData(number, setData)}>
                        Consultar
                    </button>
                </div>
            </div>
            <div className={styles.queryChart}>
                {
                    data != null &&
                <PieChart width={400} height={300}>
                    <Pie
                        dataKey="value"
                        data={ [
                            {   name: valueDescription1, value: data[0]   },
                            {   name: valueDescription2, value: number === 1 || number === 3 ? data[1]-data[0] : data[1]   }
                        ]
                        }
                        cx={200}
                        cy={150}
                        outerRadius={80}
                        fill={GREEN_FOR_ITENS}
                        label
                    />
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[Math.ceil(index / COLORS.length)]} />
                    ))}
                    <Tooltip />
                    <Legend />
                </PieChart>
                }
            </div>
        </div>
    )
}