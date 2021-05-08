import React from 'react';
import './App.css';
import Square, { NamesProps } from './Square';

function App() {
  const names: Array<NamesProps> = [
    {
      name: "erwe",
      color: 'red',
    },
    {
      name: "erw2e",
      color: 'yellow',
    },
    {
      name: "erwe3",
      color: 'red',
    },
    {
      name: "erwe4",
      color: 'yellow',
    }
];

  return (
    <div className="App">
      {names.map(({ color, name }) => 
        <Square isRed={color === "red"} name={name} />
      )}
    </div>
  );
}

export default App;
