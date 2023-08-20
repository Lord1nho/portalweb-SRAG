import axios from 'axios';

export default async function ButtonData(number, setData){
    try {
        /*
        Opção localhost
        const response = await axios.get(`http://localhost:3001/Query${number}`);
        */
       //server do render
        const response = await axios.get(`https://back-end-teste2-nav0.onrender.com/Query${number}`);
        setData(response.data);
    } catch (error) {
        console.log(error);
    }
}