import axios from 'axios';

export async function MapPost(latitude, longitude){
    const data = {
        "latitude":latitude, 
        "longitude":longitude
    }

    const datajson = JSON.stringify(data)
    console.log(datajson)
    try {
        const response = await axios.post(`https://localhost:3001/Map`,datajson);
    } catch (error) {
        console.log(error);
    }
}

export async function MapGet(){
    try {
        const response = await axios.get(`https://localhost:3001/Maps`);
        return(response.data);
    } catch (error) {
        console.log(error);
    }
}