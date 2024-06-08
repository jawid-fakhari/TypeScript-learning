import React from 'react';
import User from './components/User';

//possiamo creare un variabile type fuori scope e usarlo all'interno dello scop line 30
type Person = { name: string, fName: string, age: number };
//line 36
type MixArray = (string | number)[];
//come settare il type dei parametri di un function , dentro h2
function sum(a: number, b:number) : number{ // ...) : number è il type dell'output di function
  return a + b;
}

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

  let newPerson : Person = {
    name: 'Ahmad',
    fName: 'Mamad',
    age: 23,
  };

  let array4 : MixArray = ['ff', 3];

  // come passare una function con i type settato come props al componente
  function minus(a:number, b:number) {
    return a - b;
  }

  return (
    <div className="App">
        <h1>TypeScript</h1>
        <h2>{sum(2, 4)}</h2>
        {/* i props di User è stato settato, e finché non viene completato i suoi props avermo errore "il bello di typescript" */}
        <User name='Ali' age={23} hasChild={false} minus={minus} father='Bob'/>
        <hr />
        <User name='Mammad' age={35} hasChild={true} minus={minus}/>
        
    </div>
  );
}

export default App;
