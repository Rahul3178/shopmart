import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { ShopperIndex } from './components/ShopperIndex';
import { ThemeContext,InitialTheme } from './contexts/ThemeContext'
import {useState} from 'react'


function App() {

  return (
    <div className="App">
    <ThemeContext.Provider value={InitialTheme}>
      <ShopperIndex/>
      </ThemeContext.Provider>
      
    </div>
  );
}

export default App;
