import Header  from './Components/Header';
import LinearRegression from "./Components/Model/LinearRegression";
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className={"current_model"}>
            <LinearRegression/>
        </div>
    </div>
  );
}

export default App;
