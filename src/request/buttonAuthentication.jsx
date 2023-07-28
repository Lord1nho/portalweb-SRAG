import axios from 'axios';

export async function ButtonLogin(email, senha){

    const data = {
        email: email,
        password: senha
    }

    try{
        const reponse = await axios.post(`https://back-end-teste2-nav0.onrender.com/login`, data);

        console.log(reponse)
    } catch (error) {
        console.log(error);
    }
}

export async function ButtonRegister(email, senha){

    const data = {
        email: email,
        password: senha
    }

    try{
        const reponse = await axios.post(`https://back-end-teste2-nav0.onrender.com/register`, data);
        
    } catch (error) {
        console.log(error);
    }
}

export async function ButtonExit(email, senha){
    try{
        const reponse = await axios.post();
        
    } catch (error) {
        console.log(error);
    }
}