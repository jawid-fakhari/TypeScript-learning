import React, { useState } from 'react';
import User from './components/User';
import Children from './components/Children';
import User3 from './components/User3';
import Button from './components/Button';

//possiamo creare un variabile type fuori scope e usarlo all'interno dello scop line 30
type Person = { name: string, fName: string, age: number };
//line 36
type MixArray = (string | number)[];
//come settare il type dei parametri di un function , dentro h2
function sum(a: number, b:number) : number{ // ...) : number è il type dell'output di function
  return a + b;
}

// state type
type State = {
  name: string,
  age: number,
}

function App() {
  // settare il Type di un usestate
  const [state, setState] = useState<State | null>(null)
  // useState props,  il type ad un state <string> oppure è valore iniziale di un state qui 'Pippo' 
  const [newState, setNewState] = useState<string>('Pippo');

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

  //event type setting, react ci da il type del nostro event. button
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

  }
  //event type setting, react ci da il type del nostro event. input
  const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {

  }

  // come passare una function con i type settato come props al componente
  function minus(a:number, b:number) {
    return a - b;
  }

  return (
    <div className="App">
        <h1>TypeScript</h1>
        <h2>{sum(2, 4)}</h2>
        {/* i props di User è stato settato, e finché non viene completato i suoi props avermo errore "il bello di typescript" */}
        <User name='Ali' age={23} hasChild={false} minus={minus} father='Bob' brother={2} mother='Jenny'/>
        <hr />
        <User name='Mammad' age={35} hasChild={true} minus={minus} brother="jasmine" mother='Rosie'/>
        <Children>
            <h1>This is a children</h1>
        </Children>
        {
          // per evitare a crasshare l'applicazione quando abbiamo data null usiamo ? dopo state
          state?.name
        }
        <User3 value={newState} onChange={setNewState}/>
        {/* component props */}
        <Button /> {/*  //qui {type, tutti type ci sono} puoi trovare tutti type dei props. */}

        {/* event type setting onClick button */}
        <button onClick={handleClick}>click</button>
        {/* event type setting onChange input */}
        <input type='text' onChange={handleChange}></input>
    </div>
  );
}

export default App;
