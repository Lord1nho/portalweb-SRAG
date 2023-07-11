import axios from 'axios';

export default async function ButtonData(number, setData){
    try {
        const response = await axios.get(`http://localhost:3001/Query${number}`);
        setData(response.data);
    } catch (error) {
        console.log(error);
    }
}