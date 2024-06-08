import React from 'react';


function App() {

  // how to set type of variables in typescript
  let name: string = 'Mario';
  let age: number = 30;
  let isMarried: boolean = true;

  let array: number[] = [1, 2, 3];
  let array2: string[] = ['hello', 'ciao', 'hola'];
  let array3: (number | string)[] = [1, 'ciao', 3, 'string'];

  // creare un object con type dichiarato, attenzione che non puoi aggiungere una nuova voce dentro object se non lo hai gia dichiarato dentro type
  let object: {name: string, age: number} = {
    name: 'jawid',
    age: 36,
  };

  return (
    <div className="App">
        <h1>TypeScript</h1>
    </div>
  );
}

export default App;
