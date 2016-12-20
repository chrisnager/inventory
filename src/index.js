import React from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase'
import App from './App'
import './index.css'

const config = {
  apiKey: 'AIzaSyAh4DLLcdRytB9T9R5ukm0Pbm4w9hNjMl8',
  authDomain: 'groceries-852a8.firebaseapp.com',
  databaseURL: 'https://groceries-852a8.firebaseio.com',
  storageBucket: 'groceries-852a8.appspot.com',
}

const fb = firebase  
  .initializeApp(config)
  .database()
  .ref()

fb.on('value', snapshot => {  
  const store = snapshot.val();
  ReactDOM.render(
    <App {...store} />,
    document.getElementById('root')
  )
})

