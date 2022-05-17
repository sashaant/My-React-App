import React from 'react';
import './App.css';
import Card from "./components/Card";


function App() {
  return (
    <div className="App">
    <Card personName= "Sasha"
          personJob= "SDET"
          infoData= "I also write and speak about web development, JavaScript, and technology."
          infoSkills= "Welcome and thanks for stopping by. I hope you enjoy exploring this site as much as I've enjoyed building it."  
    />
  
    </div>
  );
}

export default App;
