import { useContext } from 'react';
import './App.css';
import {ThemeContext} from './ThemeProvider'
function App() {
  const {toggle, toggleFunction}=useContext(ThemeContext);
  return (
    <div className="Background" style={{backgroundColor:toggle? 'Tomato':'Blue'}}>
     <h1>Context Api </h1>
     <button onClick= {toggleFunction}>Change the Theme</button>
    </div>
  );
}

export default App;
