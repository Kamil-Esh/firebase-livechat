import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
        apiKey: "AIzaSyAX64qNpuu5HCvhBoATTwwQ5tr1D-UGwvc",
        authDomain: "chat-react-a1099.firebaseapp.com",
        projectId: "chat-react-a1099",
        storageBucket: "chat-react-a1099.appspot.com",
        messagingSenderId: "979172544828",
        appId: "1:979172544828:web:cfa9454f310f2d3c730e39",
        measurementId: "G-JKEN7FBHY1"
    })

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Context.Provider>,
  document.getElementById('root')
);
