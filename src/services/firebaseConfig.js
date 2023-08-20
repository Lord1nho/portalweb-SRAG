import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDaBcVujVjdJ5GlbJ4pG-sIVPh0S1z_N8Q",
    authDomain: "autenticacaoprogwebsrag.firebaseapp.com",
    projectId: "autenticacaoprogwebsrag",
    storageBucket: "autenticacaoprogwebsrag.appspot.com",
    messagingSenderId: "185469722146",
    appId: "1:185469722146:web:8022b2f3722f1c6ce6747b",
    measurementId: "G-L42Y9F6J4N"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
