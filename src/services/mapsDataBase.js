import axios from 'axios';

export async function MapPost(latitude, longitude){
    const data = {
        latitude:latitude, 
        longitude:longitude
    }

    try {
        const response = await axios.post(`http://localhost:3001/Map`, data, 
            {headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
        },})
    } catch (error) {
        console.log(error);
    }
}

export async function MapGet(){
    try {
        const response = await axios.get(`http://localhost:3001/Maps`);
        return(response.data);
    } catch (error) {
        console.log(error);
    }
}