import React from 'react';
import './App.css';




const Data = {
  "name": "Sasha",
  "surname" : "Antonenko",
  "age": "29",
  "mobile" : "093-123-45-67",
  "job" : "SDET",
  "email" : "antonenko.qa@gmail.com",
  "info": ["I also write and speak about web development, JavaScript, and technology.","Welcome and thanks for stopping by. I hope you enjoy exploring this site as much as I've enjoyed building it."],
  "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "skills": ["SDLC","Agile","Automation","Perfomance","JS/TS","Playwright", "Cypress"],
}

function App() {
  return (
    <div className="App">
        <h1> Hi everyone, I'm {Data.name}</h1>
        <h3> I'm {Data.job}!</h3>
        <button>Test click button</button>
        <p> {Data.info[1]}</p>

    </div>
  );
}

export default App;
