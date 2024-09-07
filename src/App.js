import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [enviromentVariable, setEnviromentVariable]= useState("");

  useEffect(()=>{

    setEnviromentVariable(process.env.REACT_APP_SOME_ENVIROMENT_VARIABLE);

  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        HARSH HAS DEPLOYED ON GITHUB PAGES
        </p>
        <p>
        ENVIROMENT VARIABLE: {enviromentVariable}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
