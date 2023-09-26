import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/screens/home/header/Header.jsx'
import './assets/styles/global.css'
import First_Block from "./components/screens/home/first_block/First_Block.jsx";
import Second_Block from "./components/screens/home/second_block/Second_Block.jsx";
import Thirst_Block from "./components/screens/home/thirst_block/Thirst_Block.jsx"
import Fourth_Block from "./components/screens/home/fourth_block/Fourth_Block.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <First_Block />
    <Second_Block />
    <Thirst_Block />
    <Fourth_Block />
  </React.StrictMode>,
)